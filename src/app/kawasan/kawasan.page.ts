import { Component, OnInit } from '@angular/core';
import { WaktuSolatService } from '../islamic/waktu-solat.service';
import { NavController } from '@ionic/angular';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-kawasan',
  templateUrl: './kawasan.page.html',
  styleUrls: ['./kawasan.page.scss'],
})
export class KawasanPage implements OnInit {

  filter: '';
  kawasan2 = [];
  kawasan2_ori = [];

  constructor(private wsSvc: WaktuSolatService, private nav: NavController) {
    this.wsSvc.getKawasan2().subscribe((kawasan2: Array<string>) => {
      let t = [];
      this.kawasan2_ori = kawasan2.filter((item: any) => {
        let f = t.indexOf(item.lokasi);
        t.push(item.lokasi);
        return f == -1;
      });
      this.kawasan2 = this.kawasan2_ori.slice();
    });
  }

  ngOnInit() {
  }

  filterList(evt) {
    this.filter = evt.target.value;
    this.kawasan2 = this.kawasan2_ori.filter((item: any) => {
      return (item.lokasi.toLowerCase().indexOf(this.filter.toLowerCase()) > -1);
    });
  }

  pilih(kwsn) {
    this.wsSvc.setKawasan(kwsn);
    this.nav.pop();
  }

}
