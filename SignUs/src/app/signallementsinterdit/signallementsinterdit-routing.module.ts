import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignallementsinterditPage } from './signallementsinterdit.page';

const routes: Routes = [
  {
    path: '',
    component: SignallementsinterditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignallementsinterditPageRoutingModule {}
