import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetInvolvedPage } from './get-involved.page';

const routes: Routes = [
  {
    path: '',
    component: GetInvolvedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetInvolvedPageRoutingModule {}
