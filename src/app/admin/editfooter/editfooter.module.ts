import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditfooterPageRoutingModule } from './editfooter-routing.module';

import { EditfooterPage } from './editfooter.page';

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
    EditfooterPageRoutingModule
  ],
  declarations: [EditfooterPage]
})
export class EditfooterPageModule {}
