import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-solat',
  templateUrl: './solat.page.html',
  styleUrls: ['./solat.page.scss'],
})
export class SolatPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  pilihKawasan() {
    this.nav.navigateForward('/kawasan');
  }
}
