import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEnseignantsPageRoutingModule } from './gestion-enseignants-routing.module';

import { GestionEnseignantsPage } from './gestion-enseignants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEnseignantsPageRoutingModule
  ],
  declarations: [GestionEnseignantsPage]
})
export class GestionEnseignantsPageModule {}
