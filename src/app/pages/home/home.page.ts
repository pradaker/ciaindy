import { Component, OnInit } from '@angular/core';
import { HomePageContent, HomePageContentService } from 'src/app/services/home-page-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  HomePageContents: HomePageContent[] = [];

  constructor(
    private HomePageContentService: HomePageContentService,
  ) { }

  ngOnInit() {
    this.getHomePageContent()
  }

  getHomePageContent() {
    this.HomePageContentService.getHomePageContent().subscribe(res => {
      console.log(res)
      this.HomePageContents = res
    })
  }

}
