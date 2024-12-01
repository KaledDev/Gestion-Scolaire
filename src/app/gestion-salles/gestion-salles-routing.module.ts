import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionSallesPage } from './gestion-salles.page';

const routes: Routes = [
  {
    path: '',
    component: GestionSallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionSallesPageRoutingModule {}
