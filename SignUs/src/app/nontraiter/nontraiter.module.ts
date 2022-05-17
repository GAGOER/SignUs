import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NontraiterPageRoutingModule } from './nontraiter-routing.module';

import { NontraiterPage } from './nontraiter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NontraiterPageRoutingModule
  ],
  declarations: [NontraiterPage]
})
export class NontraiterPageModule {}
