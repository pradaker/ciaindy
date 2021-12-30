import { Component, OnInit } from '@angular/core';
import { FooterContent, FooterContentService } from 'src/app/services/footer-content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  FooterContents: FooterContent[] = [];

  constructor(
    private FooterContentService: FooterContentService,
  ) { }

  ngOnInit() {
    this.getFooterContent()
  }

  getFooterContent() {
    this.FooterContentService.getFooterContent().subscribe(res => {
      console.log(res)
      this.FooterContents = res
    })
  }

}
