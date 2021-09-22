import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina8Page } from './pagina8.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina8PageRoutingModule {}
