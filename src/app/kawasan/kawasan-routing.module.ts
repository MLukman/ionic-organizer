import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KawasanPage } from './kawasan.page';

const routes: Routes = [
  {
    path: '',
    component: KawasanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KawasanPageRoutingModule {}
