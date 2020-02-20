import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KawasanPageRoutingModule } from './kawasan-routing.module';

import { KawasanPage } from './kawasan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KawasanPageRoutingModule
  ],
  declarations: [KawasanPage]
})
export class KawasanPageModule {}
