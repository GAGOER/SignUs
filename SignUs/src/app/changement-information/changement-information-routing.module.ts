import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangementInformationPage } from './changement-information.page';

const routes: Routes = [
  {
    path: '',
    component: ChangementInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangementInformationPageRoutingModule {}
