import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina9PageRoutingModule } from './pagina9-routing.module';

import { Pagina9Page } from './pagina9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina9PageRoutingModule
  ],
  declarations: [Pagina9Page]
})
export class Pagina9PageModule {}
