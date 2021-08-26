import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnershipsPageRoutingModule } from './partnerships-routing.module';

import { PartnershipsPage } from './partnerships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnershipsPageRoutingModule
  ],
  declarations: [PartnershipsPage]
})
export class PartnershipsPageModule {}
