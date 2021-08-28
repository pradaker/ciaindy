import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [FooterComponent]
})
export class ShareModule { }
