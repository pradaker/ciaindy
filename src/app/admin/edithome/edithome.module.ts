import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdithomePageRoutingModule } from './edithome-routing.module';

import { EdithomePage } from './edithome.page';

import { QuillModule } from 'ngx-quill';

import { RichTextEditorModule } from 'src/app/admin/rich-text-editor/rich-text-editor.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RichTextEditorModule,
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
