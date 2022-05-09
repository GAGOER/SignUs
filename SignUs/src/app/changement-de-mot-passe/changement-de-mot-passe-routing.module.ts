import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangementDeMotPassePage } from './changement-de-mot-passe.page';

const routes: Routes = [
  {
    path: '',
    component: ChangementDeMotPassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangementDeMotPassePageRoutingModule {}
