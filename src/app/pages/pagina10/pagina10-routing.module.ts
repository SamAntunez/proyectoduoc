import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina10Page } from './pagina10.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina10PageRoutingModule {}
