import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionEnseignantsPage } from './gestion-enseignants.page';

const routes: Routes = [
  {
    path: '',
    component: GestionEnseignantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionEnseignantsPageRoutingModule {}
