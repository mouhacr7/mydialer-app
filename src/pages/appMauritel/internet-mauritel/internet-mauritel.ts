import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-internet-mauritel',
  templateUrl: 'internet-mauritel.html',
})
export class InternetMauritelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternetMauritelPage');
  }

}
