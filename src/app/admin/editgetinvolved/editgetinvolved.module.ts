import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditgetinvolvedPageRoutingModule } from './editgetinvolved-routing.module';

import { EditgetinvolvedPage } from './editgetinvolved.page';

import { QuillModule } from 'ngx-quill';

import { RichTextEditorModule } from '../rich-text-editor/rich-text-editor.module';

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
    EditgetinvolvedPageRoutingModule
  ],
  declarations: [EditgetinvolvedPage]
})
export class EditgetinvolvedPageModule {}
