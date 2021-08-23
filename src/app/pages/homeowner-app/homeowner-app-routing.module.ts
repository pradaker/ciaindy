import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeownerAppPage } from './homeowner-app.page';

const routes: Routes = [
  {
    path: '',
    component: HomeownerAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeownerAppPageRoutingModule {}
