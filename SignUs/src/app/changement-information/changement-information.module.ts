import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangementInformationPageRoutingModule } from './changement-information-routing.module';

import { ChangementInformationPage } from './changement-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangementInformationPageRoutingModule
  ],
  declarations: [ChangementInformationPage]
})
export class ChangementInformationPageModule {}
