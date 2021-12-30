import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { HomePageContent, HomePageContentService } from 'src/app/services/home-page-content.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-edithome',
  templateUrl: './edithome.page.html',
  styleUrls: ['./edithome.page.scss'],
})
export class EdithomePage implements OnInit {
  HomePageContents: HomePageContent[] = [];

  public homePageContentForm: FormGroup;

  constructor(
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private HomePageContentService: HomePageContentService,
    private firestore: AngularFirestore,
  ) { }

  ngOnInit() {
    this.createForm()
    this.getHomePageContent()
  }

  async getHomePageContent() {
    this.HomePageContentService.getHomePageContent().subscribe(async (res: any) => {
      console.log(res)
      console.log(res[0])
      let i = 0
      await res.forEach((contentArea: any) => {
        this.homePageContentForm.patchValue({ ['description'+i]: contentArea.description })
        this.homePageContentForm.patchValue({ ['title'+i]: contentArea.title })
        i += 1
      })
    })
  }

  createForm() {
    this.homePageContentForm = this.formBuilder.group({
      title0: [Validators.required],
      description0: [],
      title1: [Validators.required],
      description1: [],
      title2: [Validators.required],
      description2: []
    });
  }

  get descriptionHomePage() {
    return this.homePageContentForm.controls.description as FormControl;
  }

  async saveForm(number) {
    const title = this.homePageContentForm.value['title'+number].toString()
    const description = this.homePageContentForm.value['description'+number].toString()
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
    this.firestore.collection('homeContent').doc('F6AO8sYhVWF11NmAQYDD').update({title: title}).then(() => console.log('Title success')).catch(err => console.error(err))
    this.firestore.collection('homeContent').doc('F6AO8sYhVWF11NmAQYDD').update({description: description}).then(() => console.log('Description success')).catch(err => console.error(err))
  }

}
