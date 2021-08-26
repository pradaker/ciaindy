import { Component, OnInit } from '@angular/core';
import { PartnershipsContent, PartnershipsContentService } from 'src/app/services/partnerships-content.service';

@Component({
  selector: 'app-partnerships',
  templateUrl: './partnerships.page.html',
  styleUrls: ['./partnerships.page.scss'],
})
export class PartnershipsPage implements OnInit {
  PartnershipsContents: PartnershipsContent[] = [];

  constructor(
    private PartnershipsContentService: PartnershipsContentService
  ) { }

  ngOnInit() {
    this.getPartnershipsContent()
  }

  getPartnershipsContent() {
    this.PartnershipsContentService.getPartnershipsContent().subscribe(res => {
      console.log(res)
      this.PartnershipsContents = res
    })
  }

}
