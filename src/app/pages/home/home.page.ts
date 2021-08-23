import { Component, OnInit } from '@angular/core';
import { Application, PageContentService } from 'src/app/services/page-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  applications: Application[] = [];

  constructor(
    private PageContentService: PageContentService
  ) { }

  ngOnInit() {
    this.getPageContent()
  }

  getPageContent() {
    this.PageContentService.getApplications().subscribe(res => {
      console.log(res)
      this.applications = res
    })
  }

}
