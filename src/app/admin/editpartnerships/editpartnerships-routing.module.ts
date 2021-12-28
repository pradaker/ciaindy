import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpartnershipsPage } from './editpartnerships.page';

const routes: Routes = [
  {
    path: '',
    component: EditpartnershipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpartnershipsPageRoutingModule {}
