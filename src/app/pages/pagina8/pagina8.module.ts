import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina8PageRoutingModule } from './pagina8-routing.module';

import { Pagina8Page } from './pagina8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina8PageRoutingModule
  ],
  declarations: [Pagina8Page]
})
export class Pagina8PageModule {}
