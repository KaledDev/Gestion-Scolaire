import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'gestion-enseignants',
        loadChildren: () => import('../gestion-enseignants/gestion-enseignants.module').then(m => m.GestionEnseignantsPageModule)
      },
      {
        path: 'gestion-classe',
        loadChildren: () => import('../gestion-classe/gestion-classe.module').then(m => m.GestionClassePageModule)
      },
      {
        path: 'gestion-cours',
        loadChildren: () => import('../gestion-cours/gestion-cours.module').then(m => m.GestionCoursPageModule)
      },
      {
        path: 'gestion-salles',
        loadChildren: () => import('../gestion-salles/gestion-salles.module').then(m => m.GestionSallesPageModule)
      },
      {
        path: 'gestion-programme',
        loadChildren: () => import('../gestion-programme/gestion-programme.module').then(m => m.GestionProgrammePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/gestion-enseignants',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
