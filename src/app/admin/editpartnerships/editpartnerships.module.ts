import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpartnershipsPageRoutingModule } from './editpartnerships-routing.module';

import { EditpartnershipsPage } from './editpartnerships.page';

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
    EditpartnershipsPageRoutingModule
  ],
  declarations: [EditpartnershipsPage]
})
export class EditpartnershipsPageModule {}
