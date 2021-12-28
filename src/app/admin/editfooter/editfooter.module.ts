import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditfooterPageRoutingModule } from './editfooter-routing.module';

import { EditfooterPage } from './editfooter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditfooterPageRoutingModule
  ],
  declarations: [EditfooterPage]
})
export class EditfooterPageModule {}
