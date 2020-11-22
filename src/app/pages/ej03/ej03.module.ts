import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ej03PageRoutingModule } from './ej03-routing.module';

import { Ej03Page } from './ej03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ej03PageRoutingModule
  ],
  declarations: [Ej03Page]
})
export class Ej03PageModule {}
