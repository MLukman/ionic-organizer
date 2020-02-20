import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'solat',
    loadChildren: () => import('./solat/solat.module').then(m => m.SolatPageModule)
  },
  {
    path: 'kawasan',
    loadChildren: () => import('./kawasan/kawasan.module').then(m => m.KawasanPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then(m => m.StartPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
