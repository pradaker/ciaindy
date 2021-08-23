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
      title: 'Products',
      icon: 'list',
      path: '/products'
    },
    {
      title: 'Homeowner Application',
      icon: 'information',
      path: '/homeowner-app'
    }
  ]

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  setTitle(title) {

  }

}
