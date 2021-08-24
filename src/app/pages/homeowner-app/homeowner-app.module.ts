import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeownerAppPageRoutingModule } from './homeowner-app-routing.module';

import { HomeownerAppPage } from './homeowner-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomeownerAppPageRoutingModule
  ],
  declarations: [HomeownerAppPage]
})
export class HomeownerAppPageModule {}
