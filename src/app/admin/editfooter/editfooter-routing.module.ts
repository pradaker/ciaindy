import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditfooterPage } from './editfooter.page';

const routes: Routes = [
  {
    path: '',
    component: EditfooterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditfooterPageRoutingModule {}
