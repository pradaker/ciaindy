import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdithomePageRoutingModule } from './edithome-routing.module';

import { EdithomePage } from './edithome.page';

import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuillModule.forRoot({
      modules: {
        syntax: true
      }
    }),
    EdithomePageRoutingModule
  ],
  declarations: [EdithomePage]
})
export class EdithomePageModule {}
