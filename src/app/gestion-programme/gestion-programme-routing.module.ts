import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionProgrammePage } from './gestion-programme.page';

const routes: Routes = [
  {
    path: '',
    component: GestionProgrammePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionProgrammePageRoutingModule {}
