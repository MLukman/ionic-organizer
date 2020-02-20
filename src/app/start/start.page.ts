import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(private app: AppComponent, private nav: NavController) { }

  ngOnInit() {
  }

  menu() {
    return this.app.appPages;
  }

  navigate(url: string) {
    this.nav.navigateRoot([url]);
  }

}
