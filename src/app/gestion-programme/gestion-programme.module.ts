import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionProgrammePageRoutingModule } from './gestion-programme-routing.module';

import { GestionProgrammePage } from './gestion-programme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionProgrammePageRoutingModule
  ],
  declarations: [GestionProgrammePage]
})
export class GestionProgrammePageModule {}
