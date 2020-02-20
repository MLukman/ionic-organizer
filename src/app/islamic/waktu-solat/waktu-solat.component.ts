import { Component, OnInit } from '@angular/core';
import { WaktuSolatService } from '../waktu-solat.service';

@Component({
  selector: 'app-waktu-solat',
  templateUrl: './waktu-solat.component.html',
  styleUrls: ['./waktu-solat.component.scss'],
})
export class WaktuSolatComponent implements OnInit {

  senarai_waktu = ['imsak', 'subuh', 'syuruk', 'zohor', 'asar', 'maghrib', 'isyak'];

  constructor(private waktuSolatSvc: WaktuSolatService) { }

  ngOnInit() { }

  getWaktuSolat() {
    return this.waktuSolatSvc.getWaktuSolat();
  }

}
