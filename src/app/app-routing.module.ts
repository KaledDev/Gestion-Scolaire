import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'accueil-enseignant',
    loadChildren: () => import('./accueil-enseignant/accueil-enseignant.module').then( m => m.AccueilEnseignantPageModule)
  },
  {
    path: 'gestion-enseignants',
    loadChildren: () => import('./gestion-enseignants/gestion-enseignants.module').then( m => m.GestionEnseignantsPageModule)
  },
  {
    path: 'gestion-classe',
    loadChildren: () => import('./gestion-classe/gestion-classe.module').then( m => m.GestionClassePageModule)
  },
  {
    path: 'gestion-cours',
    loadChildren: () => import('./gestion-cours/gestion-cours.module').then( m => m.GestionCoursPageModule)
  },
  {
    path: 'gestion-salles',
    loadChildren: () => import('./gestion-salles/gestion-salles.module').then( m => m.GestionSallesPageModule)
  },
  {
    path: 'gestion-programme',
    loadChildren: () => import('./gestion-programme/gestion-programme.module').then( m => m.GestionProgrammePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
