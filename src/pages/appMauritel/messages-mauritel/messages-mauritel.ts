import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-messages-mauritel',
  templateUrl: 'messages-mauritel.html',
})
export class MessagesMauritelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesMauritelPage');
  }

}
