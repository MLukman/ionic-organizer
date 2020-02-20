import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolatPage } from './solat.page';

const routes: Routes = [
  {
    path: '',
    component: SolatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolatPageRoutingModule {}
