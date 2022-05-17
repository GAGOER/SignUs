import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfairePage } from './afaire.page';

const routes: Routes = [
  {
    path: '',
    component: AfairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfairePageRoutingModule {}
