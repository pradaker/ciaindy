import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edithome',
  templateUrl: './edithome.page.html',
  styleUrls: ['./edithome.page.scss'],
})
export class EdithomePage implements OnInit {
  
  public homePageContentForm: FormGroup;

  constructor(
    private alertController: AlertController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.homePageContentForm = this.formBuilder.group({
      title: ["Welcome", Validators.required],
      description: [
        `<strong>Christmas in Action Indy… <em>building hope in your community.</em></strong></p><p>We appreciate your interest in Christmas in Action Indy. If you have ever watched “Extreme Makeover, Home Edition” and have been moved by seeing people who were struggling being helped by generous volunteers, then you’ll be excited about Christmas in Action Indy.</p><p>Christmas in Action Indy is similar, except that instead of tearing down and building a new home, we complete a one day home repair blitz targeting low-income, elderly, and/or disabled homeowners in the Indianapolis area.</p><p><strong>Each year our one day Home Repair Blitz is scheduled for the third Saturday in May at 8AM.</strong>`
      ]
    });
  }

  get descriptionHomePage() {
    return this.homePageContentForm.controls.description as FormControl;
  }

}
