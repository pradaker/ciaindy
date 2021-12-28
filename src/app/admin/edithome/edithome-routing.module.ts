import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdithomePage } from './edithome.page';

const routes: Routes = [
  {
    path: '',
    component: EdithomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdithomePageRoutingModule {}
