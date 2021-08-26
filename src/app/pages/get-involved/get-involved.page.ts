import { Component, OnInit } from '@angular/core';
import { GetInvolvedContent, GetInvolvedContentService } from 'src/app/services/get-involved-content.service';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.page.html',
  styleUrls: ['./get-involved.page.scss'],
})
export class GetInvolvedPage implements OnInit {
  GetInvolvedContents: GetInvolvedContent[] = [];

  constructor(
    private GetInvolvedContentService: GetInvolvedContentService
  ) { }

  ngOnInit() {
    this.getGetInvolvedContent()
  }

  getGetInvolvedContent() {
    this.GetInvolvedContentService.getHomePageContent().subscribe(res => {
      console.log(res)
      this.GetInvolvedContents = res
    })
  }

}
