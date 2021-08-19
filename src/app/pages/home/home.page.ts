import { Component, OnInit } from '@angular/core';
import { Application, HomeownerApplicationService } from 'src/app/services/homeowner-application.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  applications: Application[] = [];

  constructor(
    private homeownerApplicationService: HomeownerApplicationService
  ) { }

  ngOnInit() {
    this.getHomeownerApplications()
  }

  getHomeownerApplications() {
    this.homeownerApplicationService.getApplications().subscribe(res => {
      console.log(res)
      this.applications = res
    })
  }

}
