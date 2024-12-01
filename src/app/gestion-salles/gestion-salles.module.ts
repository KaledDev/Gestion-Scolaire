import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionSallesPageRoutingModule } from './gestion-salles-routing.module';

import { GestionSallesPage } from './gestion-salles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionSallesPageRoutingModule
  ],
  declarations: [GestionSallesPage]
})
export class GestionSallesPageModule {}
