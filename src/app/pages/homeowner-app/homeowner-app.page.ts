import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homeowner-app',
  templateUrl: './homeowner-app.page.html',
  styleUrls: ['./homeowner-app.page.scss'],
})

export class HomeownerAppPage implements OnInit {

  public gymDetailsForm: FormGroup;

  constructor() {}

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

  saveDetail() {
    console.log(this.gymDetailsForm.controls.name.value)
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