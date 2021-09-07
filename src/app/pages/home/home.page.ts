import { Component, OnInit } from '@angular/core';
import { HomePageContent, HomePageContentService } from 'src/app/services/home-page-content.service';
import { FooterContent, FooterContentService } from 'src/app/services/footer-content.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

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
    private FooterContentService: FooterContentService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getHomePageContent()
    this.getFooterContent()
  }

  getHomePageContent() {
    this.HomePageContentService.getHomePageContent().subscribe(res => {
      console.log(res)
      let SanitizedRes = res
      let i = 0
      SanitizedRes.forEach((response: any) => {
        SanitizedRes[i].title = response.title
        const test: any = this.sanitizer.bypassSecurityTrustResourceUrl(response.description)
        SanitizedRes[i].description = test
        i+=-1
      })
      this.HomePageContents = SanitizedRes
    })
  }

  getFooterContent() {
    this.FooterContentService.getFooterContent()
  }

}
