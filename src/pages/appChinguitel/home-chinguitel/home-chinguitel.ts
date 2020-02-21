import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home-chinguitel',
  templateUrl: 'home-chinguitel.html',
})
export class HomeChinguitelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeChinguitelPage');
  }

}
