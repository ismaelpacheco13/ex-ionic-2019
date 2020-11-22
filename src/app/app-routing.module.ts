import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ej01',
    loadChildren: () => import('./pages/ej01/ej01.module').then( m => m.Ej01PageModule)
  },
  {
    path: 'ej02',
    loadChildren: () => import('./pages/ej02/ej02.module').then( m => m.Ej02PageModule)
  },
  {
    path: 'ej03',
    loadChildren: () => import('./pages/ej03/ej03.module').then( m => m.Ej03PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
