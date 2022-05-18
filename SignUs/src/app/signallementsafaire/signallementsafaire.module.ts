import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignallementsafairePageRoutingModule } from './signallementsafaire-routing.module';

import { SignallementsafairePage } from './signallementsafaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignallementsafairePageRoutingModule
  ],
  declarations: [SignallementsafairePage]
})
export class SignallementsafairePageModule {}
