import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { HomeownerApplication, HomeownerApplicationService } from 'src/app/services/homeowner-application.service';

@Component({
  selector: 'app-homeowner-app',
  templateUrl: './homeowner-app.page.html',
  styleUrls: ['./homeowner-app.page.scss'],
})

export class HomeownerAppPage implements OnInit {

  public homeownersApplicationForm: FormGroup;

  constructor(
    private homeownerApplicationService: HomeownerApplicationService,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
  ) {
    this.homeownersApplicationForm = this.formBuilder.group({
      checkboxArrayList: this.formBuilder.array([], [Validators.required])
    });

    this.onLoadCheckboxStatus();
  }

  homeownerConditions = [
    { name: 'Elderly', value: 'Elderly', checked: false },
    { name: 'Disabled', value: 'Disabled', checked: false },
    { name: 'Low Income', value: 'Low Income', checked: false }
  ];

  ngOnInit() {
    this.createForm()
  }

  isFormSubmitted = false;

  updateCheckControl(cal, o) {
    if (o.checked) {
      cal.push(new FormControl(o.value));
    } else {
      cal.controls.forEach((item: FormControl, index) => {
        if (item.value == o.value) {
          cal.removeAt(index);
          return;
        }
      });
    }
  }

  onLoadCheckboxStatus() {
    const checkboxArrayList: FormArray = this.homeownersApplicationForm.get('checkboxArrayList') as FormArray;
    this.homeownerConditions.forEach(o => {
      this.updateCheckControl(checkboxArrayList, o);
    })
  }

  onSelectionChange(e, i) {
    const checkboxArrayList: FormArray = this.homeownersApplicationForm.get('checkboxArrayList') as FormArray;
    this.homeownerConditions[i].checked = e.target.checked;
    this.updateCheckControl(checkboxArrayList, e.target);

  }

  createForm() {
    this.homeownersApplicationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      homePhone: new FormControl(''),
      cellPhone: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      homeownerAge: new FormControl(''),
      homeownerMonthlyIncome: new FormControl('', Validators.required),
      onlyPropertyOwned: new FormControl('', Validators.required),
      isWorking: new FormControl('', Validators.required),
      employmentLocation: new FormControl(''),
      isChurchMember: new FormControl('', Validators.required),
      churchName: new FormControl(''),
      isCommunityOrgMember: new FormControl('', Validators.required),
      communityOrgName: new FormControl(''),
      assistExplanation: new FormControl('', Validators.required),
      workNeeded: new FormControl('', Validators.required),
      familyAndFriends: new FormControl(''),
      homeownerAwareness: new FormControl('', Validators.required),
      howLearnedAboutCIA: new FormControl(''),
      nameOfPersonSubmitting: new FormControl('', Validators.required),
      agencyName: new FormControl(''),
      phoneNumberOfSubmitter: new FormControl(''),
      applicationSubmissionDate: new FormControl('', Validators.required),
    });
  }

  async saveDetail() {
    // Construct and save application details
    const homeownerApplication: HomeownerApplication = {
      name: this.homeownersApplicationForm.controls.name.value,
      address: this.homeownersApplicationForm.controls.address.value,
      homePhone: this.homeownersApplicationForm.controls.homePhone.value,
      cellPhone: this.homeownersApplicationForm.controls.cellPhone.value,
      email: this.homeownersApplicationForm.controls.email.value,
      homeownerCondition: this.homeownersApplicationForm.controls.homeownerConditon.value,
      // homeownerCondition: this.homeownerConditions.value,
      homeownerAge: this.homeownersApplicationForm.controls.homeownerAge.value,
      homeownerMonthlyIncome: this.homeownersApplicationForm.controls.homeownerMonthlyIncome.value,
      onlyPropertyOwned: this.homeownersApplicationForm.controls.onlyPropertyOwned.value,
      isWorking: this.homeownersApplicationForm.controls.isWorking.value,
      employmentLocation: this.homeownersApplicationForm.controls.employmentLocation.value,
      isChurchMember: this.homeownersApplicationForm.controls.isChurchMember.value,
      churchName: this.homeownersApplicationForm.controls.churchName.value,
      isCommunityOrgMember: this.homeownersApplicationForm.controls.isCommunityOrgMember.value,
      communityOrgName: this.homeownersApplicationForm.controls.communityOrgName.value,
      assistExplanation: this.homeownersApplicationForm.controls.assistExplanation.value,
      workNeeded: this.homeownersApplicationForm.controls.workNeeded.value,
      familyAndFriends: this.homeownersApplicationForm.controls.familyAndFriends.value,
      homeownerAwareness: this.homeownersApplicationForm.controls.homeownerAwareness.value,
      howLearnedAboutCIA: this.homeownersApplicationForm.controls.howLearnedAboutCIA.value,
      nameOfPersonSubmitting: this.homeownersApplicationForm.controls.nameOfPersonSubmitting.value,
      agencyName: this.homeownersApplicationForm.controls.agencyName.value,
      phoneNumberOfSubmitter: this.homeownersApplicationForm.controls.phoneNumberOfSubmitter.value,
      applicationSubmissionDate: new Date().getTime(),
    }
    this.homeownerApplicationService.addHomeownerApplication(homeownerApplication)
    // Display alert
    const alert = await this.alertController.create({
      cssClass: 'customAlert',
      header: 'Application Submitted',
      message: 'We have successfully receieved your application!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            location.reload();
          }
        }
      ],
      backdropDismiss: false
    });
    await alert.present();
  }

  public gethomeownersApplicationFormErrors(): string[] {
    const errors = [];

    const nameControl = this.homeownersApplicationForm.controls.name;
    if (nameControl.dirty && nameControl.hasError('required')) {
      errors.push('Homeowner name field is required');
    }

    const addressControl = this.homeownersApplicationForm.controls.address;
    if (addressControl.dirty && addressControl.hasError('required')) {
      errors.push('Address field is required');
    }

    const emailControl = this.homeownersApplicationForm.controls.email;
    if (emailControl.dirty && emailControl.errors) {
      if (emailControl.hasError('required')) {
        errors.push('Email field is required');
      }

      if (emailControl.hasError('email')) {
        errors.push('Email format is wrong.');
      }
    }

    const homeownerConditionControl = this.homeownersApplicationForm.controls.homeownerCondition;
    if (homeownerConditionControl.dirty && homeownerConditionControl.errors) {
      if (homeownerConditionControl.hasError('required')) {
        errors.push('It is required that you specify whether the homeowner is elderly, disabled, or low income.');
      }
    }

    const homeownerMonthlyIncomeControl = this.homeownersApplicationForm.controls.homeownerMonthlyIncome;
    if (homeownerMonthlyIncomeControl.dirty && homeownerMonthlyIncomeControl.errors) {
      if (homeownerMonthlyIncomeControl.hasError('required')) {
        errors.push('The monthly income field is required');
      }
    }

    const onlyPropertyOwnedControl = this.homeownersApplicationForm.controls.onlyPropertyOwned;
    if (onlyPropertyOwnedControl.dirty && onlyPropertyOwnedControl.errors) {
      if (onlyPropertyOwnedControl.hasError('required')) {
        errors.push('You are required to specify whether this is the only property owned by the homeowner.');
      }
    }

    const isWorkingControl = this.homeownersApplicationForm.controls.isWorking;
    if (isWorkingControl.dirty && isWorkingControl.errors) {
      if (isWorkingControl.hasError('required')) {
        errors.push('You are required to specify whether the homeowner is working.');
      }
    }

    const isChurchMemberControl = this.homeownersApplicationForm.controls.isChurchMember;
    if (isChurchMemberControl.dirty && isChurchMemberControl.errors) {
      if (isChurchMemberControl.hasError('required')) {
        errors.push('You are required to specify whether the homeowner is a member or regular attendee of a local church.');
      }
    }

    const isCommunityOrgMemberControl = this.homeownersApplicationForm.controls.isCommunityOrgMember;
    if (isCommunityOrgMemberControl.dirty && isCommunityOrgMemberControl.errors) {
      if (isCommunityOrgMemberControl.hasError('required')) {
        errors.push('You are required to specify whether the homeowner is a member of a community organization.');
      }
    }

    const assistExplanationControl = this.homeownersApplicationForm.controls.assistExplanation;
    if (assistExplanationControl.dirty && assistExplanationControl.errors) {
      if (assistExplanationControl.hasError('required')) {
        errors.push('You are required to describe why the homeowner needs Christmas in Action to assist with home repairs.');
      }
    }

    const workNeededControl = this.homeownersApplicationForm.controls.workNeeded;
    if (workNeededControl.dirty && workNeededControl.errors) {
      if (workNeededControl.hasError('required')) {
        errors.push("You are required to describe the work needed to be done at the homeowner's house.");
      }
    }

    const homeownerAwarenessControl = this.homeownersApplicationForm.controls.homeownerAwareness;
    if (homeownerAwarenessControl.dirty && homeownerAwarenessControl.errors) {
      if (homeownerAwarenessControl.hasError('required')) {
        errors.push('You are required to specify whether the homeowner is aware of this referral.');
      }
    }

    const nameOfPersonSubmittingControl = this.homeownersApplicationForm.controls.nameOfPersonSubmitting;
    if (nameOfPersonSubmittingControl.dirty && nameOfPersonSubmittingControl.errors) {
      if (nameOfPersonSubmittingControl.hasError('required')) {
        errors.push('The name of the person submitting this referral is required.');
      }
    }

    return errors;
  }

}
