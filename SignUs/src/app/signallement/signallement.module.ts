import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignallementPageRoutingModule } from './signallement-routing.module';

import { SignallementPage } from './signallement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignallementPageRoutingModule
  ],
  declarations: [SignallementPage]
})
export class SignallementPageModule {}
