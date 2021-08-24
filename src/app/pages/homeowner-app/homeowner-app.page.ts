import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { HomeownerApplication, HomeownerApplicationService } from 'src/app/services/homeowner-application.service';
@Component({
  selector: 'app-homeowner-app',
  templateUrl: './homeowner-app.page.html',
  styleUrls: ['./homeowner-app.page.scss'],
})

export class HomeownerAppPage implements OnInit {

  public gymDetailsForm: FormGroup;

  constructor(
    private homeownerApplicationService: HomeownerApplicationService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.gymDetailsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  async saveDetail() {
    // Construct and save application details
    const homeownerApplication: HomeownerApplication = {
      name: this.gymDetailsForm.controls.name.value,
      address: this.gymDetailsForm.controls.address.value,
      email: this.gymDetailsForm.controls.email.value
    }
    this.homeownerApplicationService.addHomeownerApplication(homeownerApplication)
    // Display alert
    const alert = await this.alertController.create({
      cssClass: 'customAlert',
      header: 'Application Submitted',
      message: 'We have successfully receieved your application!',
      buttons: [
        {
          text: 'Got it!',
          handler: () => {
            location.reload(); 
          }
        }
      ],
      backdropDismiss: false
    });
    await alert.present();
  }

  public getGymDetailsFormErrors(): string[] {
    const errors = [];

    const nameControl = this.gymDetailsForm.controls.name;
    if (nameControl.dirty && nameControl.hasError('required')) {
      errors.push('The Name field is required');
    }

    const addressControl = this.gymDetailsForm.controls.address;
    if (addressControl.dirty && addressControl.hasError('required')) {
      errors.push('The Address field is required');
    }

    const emailControl = this.gymDetailsForm.controls.email;
    if (emailControl.dirty && emailControl.errors) {
      if (emailControl.hasError('required')) {
        errors.push('The Email field is required');
      }

      if (emailControl.hasError('email')) {
        errors.push('The Email format is wrong.');
      }
    }

    return errors;
  }

}