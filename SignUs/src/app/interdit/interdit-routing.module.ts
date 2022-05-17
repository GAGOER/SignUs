import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterditPage } from './interdit.page';

const routes: Routes = [
  {
    path: '',
    component: InterditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterditPageRoutingModule {}
