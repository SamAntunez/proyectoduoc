import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina10PageRoutingModule } from './pagina10-routing.module';

import { Pagina10Page } from './pagina10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina10PageRoutingModule
  ],
  declarations: [Pagina10Page]
})
export class Pagina10PageModule {}
