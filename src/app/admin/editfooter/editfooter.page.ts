import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { FooterContent, FooterContentService } from 'src/app/services/footer-content.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-editfooter',
  templateUrl: './editfooter.page.html',
  styleUrls: ['./editfooter.page.scss'],
})
export class EditfooterPage implements OnInit {

  FooterContents: FooterContent[] = [];

  public footerContentForm: FormGroup;

  constructor(
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private FooterContentService: FooterContentService,
    private firestore: AngularFirestore,
  ) { }

  ngOnInit() {
    this.createForm()
    this.getFooterContent()
  }

  async getFooterContent() {
    this.FooterContentService.getFooterContent().subscribe(async (res: any) => {
      console.log(res)
      console.log(res[0])
      await res.forEach((contentArea: any) => {
        this.footerContentForm.patchValue({ ['text']: contentArea.text })
      })
    })
  }

  createForm() {
    this.footerContentForm = this.formBuilder.group({
      text: [Validators.required],
    });
  }

  get descriptionFooterPage() {
    return this.footerContentForm.controls.description as FormControl;
  }

  async saveForm() {
    const text = this.footerContentForm.value['text'].toString()
    console.log(text)
    const alert = await this.alertController.create({
      header: 'Save complete',
      message: 'Content has been successfully saved.',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Got it!',
          handler: () => {
            console.log('Content saved successfully');
          }
        }
      ]
    });
    await alert.present();
    // Save data to firestore
    this.firestore.collection('footerContent').doc('7c3TA9k9P8sshhLHHi0I').update({text: text}).then(() => console.log('Footer text change successful')).catch(err => console.error(err))
  }

}
