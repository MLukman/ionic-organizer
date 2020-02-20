import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaktuSolatComponent } from './waktu-solat/waktu-solat.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    WaktuSolatComponent
  ],
  exports: [
    WaktuSolatComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class IslamicModule { }
