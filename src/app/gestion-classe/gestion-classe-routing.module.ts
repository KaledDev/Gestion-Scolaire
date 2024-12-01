import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionClassePage } from './gestion-classe.page';

const routes: Routes = [
  {
    path: '',
    component: GestionClassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionClassePageRoutingModule {}
