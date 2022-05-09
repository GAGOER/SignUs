import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecapitulatifDuSignallementPage } from './recapitulatif-du-signallement.page';

const routes: Routes = [
  {
    path: '',
    component: RecapitulatifDuSignallementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecapitulatifDuSignallementPageRoutingModule {}
