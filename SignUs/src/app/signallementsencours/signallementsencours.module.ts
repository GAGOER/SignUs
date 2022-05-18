import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignallementsencoursPageRoutingModule } from './signallementsencours-routing.module';

import { SignallementsencoursPage } from './signallementsencours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignallementsencoursPageRoutingModule
  ],
  declarations: [SignallementsencoursPage]
})
export class SignallementsencoursPageModule {}
