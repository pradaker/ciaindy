import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { GetInvolvedContent, GetInvolvedContentService } from 'src/app/services/get-involved-content.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-editgetinvolved',
  templateUrl: './editgetinvolved.page.html',
  styleUrls: ['./editgetinvolved.page.scss'],
})
export class EditgetinvolvedPage implements OnInit {

  GetInvolvedContents: GetInvolvedContent[] = [];

  public getInvolvedContentForm: FormGroup;

  constructor(
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private GetInvolvedContentService: GetInvolvedContentService,
    private firestore: AngularFirestore,
  ) { }

  ngOnInit() {
    this.createForm()
    this.getGetInvolvedContent()
  }

  async getGetInvolvedContent() {
    this.GetInvolvedContentService.getGetInvolvedContent().subscribe(async (res: any) => {
      console.log(res)
      console.log(res[0])
      let i = 0
      await res.forEach((contentArea: any) => {
        this.getInvolvedContentForm.patchValue({ ['description'+i]: contentArea.description })
        this.getInvolvedContentForm.patchValue({ ['title'+i]: contentArea.title })
        i += 1
      })
    })
  }

  createForm() {
    this.getInvolvedContentForm = this.formBuilder.group({
      title0: [Validators.required],
      description0: [],
      title1: [Validators.required],
      description1: [],
      title2: [Validators.required],
      description2: []
    });
  }

  get descriptionGetInvolvedPage() {
    return this.getInvolvedContentForm.controls.description as FormControl;
  }

  async saveForm(number) {
    const title = this.getInvolvedContentForm.value['title'+number].toString()
    const description = this.getInvolvedContentForm.value['description'+number].toString()
    console.log(title, description)
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
    this.firestore.collection('getInvolvedContent').doc('FieCCjgM9Bu6oTZaPr5T').update({title: title}).then(() => console.log('Title success')).catch(err => console.error(err))
    this.firestore.collection('getInvolvedContent').doc('FieCCjgM9Bu6oTZaPr5T').update({description: description}).then(() => console.log('Description success')).catch(err => console.error(err))
  }

}
