import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignallementPage } from './signallement.page';

const routes: Routes = [
  {
    path: '',
    component: SignallementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignallementPageRoutingModule {}
