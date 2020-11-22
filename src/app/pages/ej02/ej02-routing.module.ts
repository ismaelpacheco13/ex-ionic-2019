import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ej02Page } from './ej02.page';

const routes: Routes = [
  {
    path: '',
    component: Ej02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ej02PageRoutingModule {}
