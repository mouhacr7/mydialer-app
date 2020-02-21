import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-internet-chinguitel',
  templateUrl: 'internet-chinguitel.html',
})
export class InternetChinguitelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternetChinguitelPage');
  }

}
