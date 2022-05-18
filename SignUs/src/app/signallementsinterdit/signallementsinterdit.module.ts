import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignallementsinterditPageRoutingModule } from './signallementsinterdit-routing.module';

import { SignallementsinterditPage } from './signallementsinterdit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignallementsinterditPageRoutingModule
  ],
  declarations: [SignallementsinterditPage]
})
export class SignallementsinterditPageModule {}
