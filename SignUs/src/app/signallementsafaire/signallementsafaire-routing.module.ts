import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignallementsafairePage } from './signallementsafaire.page';

const routes: Routes = [
  {
    path: '',
    component: SignallementsafairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignallementsafairePageRoutingModule {}
