import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
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
  },
  {
    path: 'afaire',
    loadChildren: () => import('./afaire/afaire.module').then( m => m.AfairePageModule)
  },
  {
    path: 'encours',
    loadChildren: () => import('./encours/encours.module').then( m => m.EncoursPageModule)
  },
  {
    path: 'nontraiter',
    loadChildren: () => import('./nontraiter/nontraiter.module').then( m => m.NontraiterPageModule)
  },
  {
    path: 'interdit',
    loadChildren: () => import('./interdit/interdit.module').then( m => m.InterditPageModule)
  },
  {
    path: 'terminer',
    loadChildren: () => import('./terminer/terminer.module').then( m => m.TerminerPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'profiladmin',
    loadChildren: () => import('./profiladmin/profiladmin.module').then( m => m.ProfiladminPageModule)
  },
  {
    path: 'signallementsafaire',
    loadChildren: () => import('./signallementsafaire/signallementsafaire.module').then( m => m.SignallementsafairePageModule)
  },
  {
    path: 'signallementsencours',
    loadChildren: () => import('./signallementsencours/signallementsencours.module').then( m => m.SignallementsencoursPageModule)
  },
  {
    path: 'signallementsterminer',
    loadChildren: () => import('./signallementsterminer/signallementsterminer.module').then( m => m.SignallementsterminerPageModule)
  },
  {
    path: 'signallementsnontraiter',
    loadChildren: () => import('./signallementsnontraiter/signallementsnontraiter.module').then( m => m.SignallementsnontraiterPageModule)
  },
  {
    path: 'signallementsinterdit',
    loadChildren: () => import('./signallementsinterdit/signallementsinterdit.module').then( m => m.SignallementsinterditPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
