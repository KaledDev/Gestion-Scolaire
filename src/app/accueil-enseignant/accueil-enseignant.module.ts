import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilEnseignantPageRoutingModule } from './accueil-enseignant-routing.module';

import { AccueilEnseignantPage } from './accueil-enseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilEnseignantPageRoutingModule
  ],
  declarations: [AccueilEnseignantPage]
})
export class AccueilEnseignantPageModule {}
