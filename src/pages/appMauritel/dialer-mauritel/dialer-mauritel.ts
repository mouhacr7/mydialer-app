import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dialer-mauritel',
  templateUrl: 'dialer-mauritel.html',
})
export class DialerMauritelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DialerMauritelPage');
  }

}
