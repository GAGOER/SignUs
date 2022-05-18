import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignallementsnontraiterPageRoutingModule } from './signallementsnontraiter-routing.module';

import { SignallementsnontraiterPage } from './signallementsnontraiter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignallementsnontraiterPageRoutingModule
  ],
  declarations: [SignallementsnontraiterPage]
})
export class SignallementsnontraiterPageModule {}
