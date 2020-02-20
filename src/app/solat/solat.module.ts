import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolatPageRoutingModule } from './solat-routing.module';

import { SolatPage } from './solat.page';
import { IslamicModule } from '../islamic/islamic.module';

@NgModule({
  imports: [
    IslamicModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SolatPageRoutingModule
  ],
  declarations: [SolatPage]
})
export class SolatPageModule { }
