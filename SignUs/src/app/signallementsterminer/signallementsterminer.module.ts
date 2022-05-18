import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignallementsterminerPageRoutingModule } from './signallementsterminer-routing.module';

import { SignallementsterminerPage } from './signallementsterminer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignallementsterminerPageRoutingModule
  ],
  declarations: [SignallementsterminerPage]
})
export class SignallementsterminerPageModule {}
