import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ej02PageRoutingModule } from './ej02-routing.module';

import { Ej02Page } from './ej02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ej02PageRoutingModule
  ],
  declarations: [Ej02Page]
})
export class Ej02PageModule {}
