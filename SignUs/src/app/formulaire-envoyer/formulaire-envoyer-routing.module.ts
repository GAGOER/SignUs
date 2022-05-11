import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulaireEnvoyerPage } from './formulaire-envoyer.page';

const routes: Routes = [
  {
    path: '',
    component: FormulaireEnvoyerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulaireEnvoyerPageRoutingModule {}
