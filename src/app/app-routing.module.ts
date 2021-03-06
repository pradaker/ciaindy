import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'homeowner-app',
    loadChildren: () => import('./pages/homeowner-app/homeowner-app.module').then( m => m.HomeownerAppPageModule)
  },
  {
    path: 'get-involved',
    loadChildren: () => import('./pages/get-involved/get-involved.module').then( m => m.GetInvolvedPageModule)
  },
  {
    path: 'partnerships',
    loadChildren: () => import('./pages/partnerships/partnerships.module').then( m => m.PartnershipsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
