import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionClassePageRoutingModule } from './gestion-classe-routing.module';

import { GestionClassePage } from './gestion-classe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionClassePageRoutingModule
  ],
  declarations: [GestionClassePage]
})
export class GestionClassePageModule {}
