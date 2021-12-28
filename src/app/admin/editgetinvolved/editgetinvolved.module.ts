import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditgetinvolvedPageRoutingModule } from './editgetinvolved-routing.module';

import { EditgetinvolvedPage } from './editgetinvolved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditgetinvolvedPageRoutingModule
  ],
  declarations: [EditgetinvolvedPage]
})
export class EditgetinvolvedPageModule {}
