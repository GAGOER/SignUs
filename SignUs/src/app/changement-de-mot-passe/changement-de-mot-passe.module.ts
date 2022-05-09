import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangementDeMotPassePageRoutingModule } from './changement-de-mot-passe-routing.module';

import { ChangementDeMotPassePage } from './changement-de-mot-passe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangementDeMotPassePageRoutingModule
  ],
  declarations: [ChangementDeMotPassePage]
})
export class ChangementDeMotPassePageModule {}
