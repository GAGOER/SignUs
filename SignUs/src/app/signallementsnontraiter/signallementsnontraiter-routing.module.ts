import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignallementsnontraiterPage } from './signallementsnontraiter.page';

const routes: Routes = [
  {
    path: '',
    component: SignallementsnontraiterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignallementsnontraiterPageRoutingModule {}
