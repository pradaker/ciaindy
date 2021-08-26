import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuItems = [
    {
      title: 'Home',
      icon: 'home',
      path: '/'
    },
    {
      title: 'Homeowner Application',
      icon: 'information',
      path: '/homeowner-app'
    },
    {
      title: 'Get Involved',
      icon: 'information',
      path: '/get-involved'
    }
  ]

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  setTitle(title) {

  }

}
