import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetInvolvedPageRoutingModule } from './get-involved-routing.module';

import { GetInvolvedPage } from './get-involved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetInvolvedPageRoutingModule
  ],
  declarations: [GetInvolvedPage]
})
export class GetInvolvedPageModule {}
