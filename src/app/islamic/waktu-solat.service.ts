import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WaktuSolatService {

  data: any = {};
  kawasan2: any;
  circuit: boolean = false;
  kawasan: string = 'WLY01';

  constructor(public http: HttpClient) { }

  getKawasan() {
    return this.kawasan;
  }

  setKawasan(kawasan: string) {
    this.kawasan = kawasan;
  }

  getKawasan2(): Observable<Array<string>> {
    return new Observable((observer: Observer<Array<string>>) => {
      if (this.kawasan2) {
        observer.next(this.kawasan2);
        observer.complete();
      } else if (!this.circuit) {
        let toast = null;
        this.http.get('https://api.azanpro.com/zone/grouped.json')
          .subscribe((response: any) => {
            this.kawasan2 = response.results;
            observer.next(this.kawasan2);
            observer.complete();
          }, error => {
            console.log(error);
            this.circuit = true;
            setTimeout(() => this.circuit = false, 5000);
          });
      }
    });
  }

  getWaktuSolat() {
    return new Observable((observer: Observer<string>) => {
      if (this.data[this.kawasan]) {
        observer.next(this.data[this.kawasan]);
        observer.complete();
      } else if (!this.circuit) {
        this.http.get('https://api.azanpro.com/times/today.json?zone=' + this.kawasan + '&format=12-hour')
          .subscribe((response: any) => {
            this.data[this.kawasan] = response;
            observer.next(this.data[this.kawasan]);
            observer.complete();
          }, error => {
            console.log(error);
            this.circuit = true;
            setTimeout(() => this.circuit = false, 5000);
          });
      }
    });
  }
}
