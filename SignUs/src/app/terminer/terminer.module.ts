import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminerPageRoutingModule } from './terminer-routing.module';

import { TerminerPage } from './terminer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminerPageRoutingModule
  ],
  declarations: [TerminerPage]
})
export class TerminerPageModule {}
