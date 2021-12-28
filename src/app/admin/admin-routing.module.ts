import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'edithome',
    loadChildren: () => import('./edithome/edithome.module').then( m => m.EdithomePageModule)
  },
  {
    path: 'editpartnerships',
    loadChildren: () => import('./editpartnerships/editpartnerships.module').then( m => m.EditpartnershipsPageModule)
  },
  {
    path: 'editgetinvolved',
    loadChildren: () => import('./editgetinvolved/editgetinvolved.module').then( m => m.EditgetinvolvedPageModule)
  },
  {
    path: 'editfooter',
    loadChildren: () => import('./editfooter/editfooter.module').then( m => m.EditfooterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
