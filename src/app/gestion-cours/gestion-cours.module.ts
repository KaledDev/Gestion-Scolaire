import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCoursPageRoutingModule } from './gestion-cours-routing.module';

import { GestionCoursPage } from './gestion-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCoursPageRoutingModule
  ],
  declarations: [GestionCoursPage]
})
export class GestionCoursPageModule {}
