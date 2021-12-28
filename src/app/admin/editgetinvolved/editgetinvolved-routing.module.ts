import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditgetinvolvedPage } from './editgetinvolved.page';

const routes: Routes = [
  {
    path: '',
    component: EditgetinvolvedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditgetinvolvedPageRoutingModule {}
