import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterditPageRoutingModule } from './interdit-routing.module';

import { InterditPage } from './interdit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterditPageRoutingModule
  ],
  declarations: [InterditPage]
})
export class InterditPageModule {}
