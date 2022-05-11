import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'changement-de-mot-passe',
    loadChildren: () => import('./changement-de-mot-passe/changement-de-mot-passe.module').then( m => m.ChangementDeMotPassePageModule)
  },
  {
    path: 'changement-information',
    loadChildren: () => import('./changement-information/changement-information.module').then( m => m.ChangementInformationPageModule)
  },
  {
    path: 'recapitulatif-du-signallement',
    loadChildren: () => import('./recapitulatif-du-signallement/recapitulatif-du-signallement.module').then( m => m.RecapitulatifDuSignallementPageModule)
  },
  {
    path: 'signallement',
    loadChildren: () => import('./signallement/signallement.module').then( m => m.SignallementPageModule)
  },
  {
    path: 'mot-de-passe-oublier',
    loadChildren: () => import('./mot-de-passe-oublier/mot-de-passe-oublier.module').then( m => m.MotDePasseOublierPageModule)
  },
  {
    path: 'formulaire-envoyer',
    loadChildren: () => import('./formulaire-envoyer/formulaire-envoyer.module').then( m => m.FormulaireEnvoyerPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
