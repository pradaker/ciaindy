import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdithomePageRoutingModule } from './edithome-routing.module';

import { EdithomePage } from './edithome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdithomePageRoutingModule
  ],
  declarations: [EdithomePage]
})
export class EdithomePageModule {}
