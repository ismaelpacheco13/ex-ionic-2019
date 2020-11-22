import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ej03Page } from './ej03.page';

const routes: Routes = [
  {
    path: '',
    component: Ej03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ej03PageRoutingModule {}
