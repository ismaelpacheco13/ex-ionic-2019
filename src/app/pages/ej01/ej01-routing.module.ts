import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ej01Page } from './ej01.page';

const routes: Routes = [
  {
    path: '',
    component: Ej01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ej01PageRoutingModule {}
