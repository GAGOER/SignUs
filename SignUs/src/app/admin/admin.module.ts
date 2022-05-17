import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPage,
    children: [
      {
        path: 'afaire',
        loadChildren: () => import('../afaire/afaire.module').then( m => m.AfairePageModule)
      },
      {
        path: 'encours',
        loadChildren: () => import('../encours/encours.module').then( m => m.EncoursPageModule)
      },
      {
        path: 'nontraiter',
        loadChildren: () => import('../nontraiter/nontraiter.module').then( m => m.NontraiterPageModule)
      },
      {
        path: 'interdit',
        loadChildren: () => import('../interdit/interdit.module').then( m => m.InterditPageModule)
      },
      {
        path: 'terminer',
        loadChildren: () => import('../terminer/terminer.module').then( m => m.TerminerPageModule)
      }
    ]
  },
  {
    path: 'admin',
    redirectTo: '/admin/afaire'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminPage]
})
export class AdminPageModule {}
