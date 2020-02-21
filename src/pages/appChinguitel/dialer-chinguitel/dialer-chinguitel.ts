import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dialer-chinguitel',
  templateUrl: 'dialer-chinguitel.html',
})
export class DialerChinguitelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DialerChinguitelPage');
  }

}
