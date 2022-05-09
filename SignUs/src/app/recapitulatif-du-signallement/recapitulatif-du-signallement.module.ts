import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecapitulatifDuSignallementPageRoutingModule } from './recapitulatif-du-signallement-routing.module';

import { RecapitulatifDuSignallementPage } from './recapitulatif-du-signallement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecapitulatifDuSignallementPageRoutingModule
  ],
  declarations: [RecapitulatifDuSignallementPage]
})
export class RecapitulatifDuSignallementPageModule {}
