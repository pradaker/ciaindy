import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { PartnershipsContent, PartnershipsContentService } from 'src/app/services/partnerships-content.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-editpartnerships',
  templateUrl: './editpartnerships.page.html',
  styleUrls: ['./editpartnerships.page.scss'],
})
export class Editpartnerships implements OnInit {
  PartnershipsContents: PartnershipsContent[] = [];

  public partnershipsContentForm: FormGroup;

  constructor(
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private PartnershipsContentService: PartnershipsContentService,
    private firestore: AngularFirestore,
  ) { }

  ngOnInit() {
    this.createForm()
    this.getPartnershipsContent()
  }

  async getPartnershipsContent() {
    this.PartnershipsContentService.getPartnershipsContent().subscribe(async (res: any) => {
      console.log(res)
      console.log(res[0])
      let i = 0
      await res.forEach((contentArea: any) => {
        this.partnershipsContentForm.patchValue({ ['description'+i]: contentArea.description })
        this.partnershipsContentForm.patchValue({ ['title'+i]: contentArea.title })
        i += 1
      })
    })
  }

  createForm() {
    this.partnershipsContentForm = this.formBuilder.group({
      title0: [Validators.required],
      description0: [],
      title1: [Validators.required],
      description1: [],
      title2: [Validators.required],
      description2: []
    });
  }

  get descriptionPartnershipsPage() {
    return this.partnershipsContentForm.controls.description as FormControl;
  }

  async saveForm(number) {
    const title = this.partnershipsContentForm.value['title'+number].toString()
    const description = this.partnershipsContentForm.value['description'+number].toString()
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
    if (number == 0) {
      this.firestore.collection('partnershipsContent').doc('4dBxBcI32gp3L0q7vt7a').update({title: title}).then(() => console.log('Title success')).catch(err => console.error(err))
      this.firestore.collection('partnershipsContent').doc('r4sG4ZagsDIhMZPIGZMc').update({description: description}).then(() => console.log('Description success')).catch(err => console.error(err))
    }
  }

}
