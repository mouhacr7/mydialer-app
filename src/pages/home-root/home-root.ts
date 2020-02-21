import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../appMattel/tabs/tabs';
import { TabsMauritelPage } from '../appMauritel/tabs-mauritel/tabs-mauritel';
import { TabsChinguitelPage } from '../appChinguitel/tabs-chinguitel/tabs-chinguitel';


@Component({
  selector: 'page-home-root',
  templateUrl: 'home-root.html',
})
export class HomeRootPage {

  constructor(public navCtrl: NavController
     ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeRootPage');
  }

  goToHomeMattel() {
    this.navCtrl.push(TabsPage);
  }
  goToHomeMauritel() {
    this.navCtrl.push(TabsMauritelPage);
  }
  goToHomeChinguitel() {
    this.navCtrl.push(TabsChinguitelPage);
  }

}
