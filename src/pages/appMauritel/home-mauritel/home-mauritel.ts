import { Component } from '@angular/core';
import {  NavController, ViewController, AlertController, PopoverController, App } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home-mauritel',
  templateUrl: 'home-mauritel.html',
})
export class HomeMauritelPage {

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeMauritelPage');
  }
  goBack() {
    this.appCtrl.getRootNav().pop();
  }  

}
