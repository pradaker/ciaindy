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

  }

  homeownerConditions = [
    { name: 'Elderly', value: 'Elderly', checked: false },
    { name: 'Disabled', value: 'Disabled', checked: false },
    { name: 'Low Income', value: 'Low Income', checked: false }
  ];

  optionsOnlyPropertyOwned = [
    { name: 'Yes', value: 'Yes', checked: false },
    { name: 'No', value: 'No', checked: false }
  ]

  optionsIsWorking = [
    { name: 'Yes', value: 'Yes', checked: false },
    { name: 'No', value: 'No', checked: false },
    { name: 'Retired', value: 'Retired', checked: false }
  ]

  optionsIsChurchMember = [
    { name: 'Yes', value: 'Yes', checked: false },
    { name: 'No', value: 'No', checked: false }
  ]

  optionsIsCommunityOrgMember = [
    { name: 'Yes', value: 'Yes', checked: false },
    { name: 'No', value: 'No', checked: false }
  ]

  optionsHomeownerAwareness = [
    { name: 'Yes', value: 'Yes', checked: false },
    { name: 'No', value: 'No', checked: false }
  ]

  ngOnInit() {
    this.createForm()
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
      employmentLocation: new FormControl(''),
      isChurchMember: new FormControl('', Validators.required),
      churchName: new FormControl(''),
      communityOrgName: new FormControl(''),
      assistExplanation: new FormControl('', Validators.required),
      workNeeded: new FormControl('', Validators.required),
      familyAndFriends: new FormControl(''),
      howLearnedAboutCIA: new FormControl(''),
      nameOfPersonSubmitting: new FormControl('', Validators.required),
      agencyName: new FormControl(''),
      phoneNumberOfSubmitter: new FormControl(''),
      applicationSubmissionDate: new FormControl('', Validators.required),
    });
  }

  async saveDetail() {
    if (this.homeownersApplicationForm.invalid == true) {
      const alert = await this.alertController.create({
        cssClass: 'customAlert',
        header: 'Error',
        message: 'Please fix all errors in application before submitting.',
        buttons: [
          {
            text: 'OK'
          }
        ],
      });
      await alert.present();
    } else {
      let selectedConditions = []
      this.homeownerConditions.forEach((option: any) => {
        if(option.checked==true) {
          selectedConditions.push(option.value)
        }
      })
      let selectedOnlyPropertyOwned = []
      this.optionsOnlyPropertyOwned.forEach((option: any) => {
        if(option.checked==true) {
          selectedOnlyPropertyOwned.push(option.value)
        }
      })
      let selectedIsWorking = []
      this.optionsIsWorking.forEach((option: any) => {
        if(option.checked==true) {
          selectedIsWorking.push(option.value)
        }
      })
      let selectedIsChurchMember = []
      this.optionsIsChurchMember.forEach((option: any) => {
        if(option.checked==true) {
          selectedIsChurchMember.push(option.value)
        }
      })
      let selectedIsCommunityOrgMember = []
      this.optionsIsCommunityOrgMember.forEach((option: any) => {
        if(option.checked==true) {
          selectedIsCommunityOrgMember.push(option.value)
        }
      })
      let selectedHomeownerAwareness = []
      this.optionsHomeownerAwareness.forEach((option: any) => {
        if(option.checked==true) {
          selectedHomeownerAwareness.push(option.value)
        }
      })
      // Construct and save application details
      const homeownerApplication: HomeownerApplication = {
        AA_name: this.homeownersApplicationForm.controls.name.value,
        AB_address: this.homeownersApplicationForm.controls.address.value,
        AC_homePhone: this.homeownersApplicationForm.controls.homePhone.value,
        AD_cellPhone: this.homeownersApplicationForm.controls.cellPhone.value,
        AE_email: this.homeownersApplicationForm.controls.email.value,
        AF_homeownerCondition: selectedConditions,
        AG_homeownerAge: this.homeownersApplicationForm.controls.homeownerAge.value,
        AH_homeownerMonthlyIncome: this.homeownersApplicationForm.controls.homeownerMonthlyIncome.value,
        AI_onlyPropertyOwned: selectedOnlyPropertyOwned,
        AJ_isWorking: selectedIsWorking,
        AK_employmentLocation: this.homeownersApplicationForm.controls.employmentLocation.value,
        AL_isChurchMember: selectedIsChurchMember,
        AM_churchName: this.homeownersApplicationForm.controls.churchName.value,
        AN_isCommunityOrgMember: selectedIsCommunityOrgMember,
        AO_communityOrgName: this.homeownersApplicationForm.controls.communityOrgName.value,
        AP_assistExplanation: this.homeownersApplicationForm.controls.assistExplanation.value,
        AQ_workNeeded: this.homeownersApplicationForm.controls.workNeeded.value,
        AR_familyAndFriends: this.homeownersApplicationForm.controls.familyAndFriends.value,
        AS_homeownerAwareness: selectedHomeownerAwareness,
        AT_howLearnedAboutCIA: this.homeownersApplicationForm.controls.howLearnedAboutCIA.value,
        AU_nameOfPersonSubmitting: this.homeownersApplicationForm.controls.nameOfPersonSubmitting.value,
        AV_agencyName: this.homeownersApplicationForm.controls.agencyName.value,
        AW_phoneNumberOfSubmitter: this.homeownersApplicationForm.controls.phoneNumberOfSubmitter.value,
        AX_applicationSubmissionDate: new Date().getTime(),
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

    let selectedConditions = []
    this.homeownerConditions.forEach((option: any) => {
      if(option.checked==true) {
        selectedConditions.push(option.value)
      }
    })

    if (selectedConditions == []) {
      errors.push('Condition(s) of homeowner is required')
    }

    const homeownerMonthlyIncomeControl = this.homeownersApplicationForm.controls.homeownerMonthlyIncome;
    if (homeownerMonthlyIncomeControl.dirty && homeownerMonthlyIncomeControl.errors) {
      if (homeownerMonthlyIncomeControl.hasError('required')) {
        errors.push('The monthly income field is required');
      }
    }

    let selectedOnlyPropertyOwned = []
    this.optionsOnlyPropertyOwned.forEach((option: any) => {
      if(option.checked==true) {
        selectedOnlyPropertyOwned.push(option.value)
      }
    })

    if (selectedOnlyPropertyOwned == []) {
      errors.push('You are required to specify whether this is the only property owned by the homeowner.')
    }

    let selectedIsWorking = []
    this.optionsIsWorking.forEach((option: any) => {
      if(option.checked==true) {
        selectedIsWorking.push(option.value)
      }
    })

    if (selectedIsWorking == []) {
      errors.push('You are required to specify whether the homeowner is working.')
    }

    let selectedIsChurchMember = []
    this.optionsIsChurchMember.forEach((option: any) => {
      if(option.checked==true) {
        selectedIsChurchMember.push(option.value)
      }
    })

    if (selectedIsChurchMember == []) {
      errors.push('You are required to specify whether the homeowner is a member or regular attendee of a local church.')
    }

    let selectedIsCommunityOrgMember = []
    this.optionsIsCommunityOrgMember.forEach((option: any) => {
      if(option.checked==true) {
        selectedIsCommunityOrgMember.push(option.value)
      }
    })

    if (selectedIsCommunityOrgMember == []) {
      errors.push('You are required to specify whether the homeowner is a member of a community organization.')
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

    let selectedHomeownerAwareness = []
    this.optionsHomeownerAwareness.forEach((option: any) => {
      if(option.checked==true) {
        selectedHomeownerAwareness.push(option.value)
      }
    })

    if (selectedHomeownerAwareness == []) {
      errors.push('You are required to specify whether the homeowner is aware of this referral.')
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
