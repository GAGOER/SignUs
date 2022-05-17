import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfairePageRoutingModule } from './afaire-routing.module';

import { AfairePage } from './afaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfairePageRoutingModule
  ],
  declarations: [AfairePage]
})
export class AfairePageModule {}
