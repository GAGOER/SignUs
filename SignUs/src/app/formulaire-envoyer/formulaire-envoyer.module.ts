import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulaireEnvoyerPageRoutingModule } from './formulaire-envoyer-routing.module';

import { FormulaireEnvoyerPage } from './formulaire-envoyer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulaireEnvoyerPageRoutingModule
  ],
  declarations: [FormulaireEnvoyerPage]
})
export class FormulaireEnvoyerPageModule {}
