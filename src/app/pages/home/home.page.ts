import { Component, OnInit } from '@angular/core';
import { PageContent, PageContentService } from 'src/app/services/page-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pageContents: PageContent[] = [];

  constructor(
    private PageContentService: PageContentService
  ) { }

  ngOnInit() {
    this.getPageContent()
  }

  getPageContent() {
    this.PageContentService.getPageContent().subscribe(res => {
      console.log(res)
      this.pageContents = res
    })
  }

}
