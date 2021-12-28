import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpartnershipsPageRoutingModule } from './editpartnerships-routing.module';

import { EditpartnershipsPage } from './editpartnerships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpartnershipsPageRoutingModule
  ],
  declarations: [EditpartnershipsPage]
})
export class EditpartnershipsPageModule {}
