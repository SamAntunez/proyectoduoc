import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina9Page } from './pagina9.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina9PageRoutingModule {}
