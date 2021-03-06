import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'homeowner-app',
        loadChildren: () => import('../homeowner-app/homeowner-app.module').then( m => m.HomeownerAppPageModule)
      },
      {
        path: 'partnerships',
        loadChildren: () => import('../partnerships/partnerships.module').then( m => m.PartnershipsPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'get-involved',
        loadChildren: () => import('../get-involved/get-involved.module').then( m => m.GetInvolvedPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
