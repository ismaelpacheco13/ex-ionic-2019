import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ej01PageRoutingModule } from './ej01-routing.module';

import { Ej01Page } from './ej01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ej01PageRoutingModule
  ],
  declarations: [Ej01Page]
})
export class Ej01PageModule {}
