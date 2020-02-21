import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-messages-chinguitel',
  templateUrl: 'messages-chinguitel.html',
})
export class MessagesChinguitelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesChinguitelPage');
  }

}
