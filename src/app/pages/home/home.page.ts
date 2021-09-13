import { Component, OnInit } from '@angular/core';
import { HomePageContent, HomePageContentService } from 'src/app/services/home-page-content.service';
import { FooterContent, FooterContentService } from 'src/app/services/footer-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  HomePageContents: HomePageContent[] = [];
  FooterContent: FooterContent;

  constructor(
    private HomePageContentService: HomePageContentService,
    private FooterContentService: FooterContentService
  ) { }

  ngOnInit() {
    this.getHomePageContent()
    this.getFooterContent()
  }

  getHomePageContent() {
    this.HomePageContentService.getHomePageContent().subscribe(res => {
      console.log(res)
      this.HomePageContents = res
    })
  }

  getFooterContent() {
    this.FooterContentService.getFooterContent()
  }

}
