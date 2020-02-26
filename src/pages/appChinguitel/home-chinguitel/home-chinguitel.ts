import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, App, AlertController, PopoverController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home-chinguitel',
  templateUrl: 'home-chinguitel.html',
})
export class HomeChinguitelPage {

  
  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeChinguitelPage');
  }
  goBack() {
    this.appCtrl.getRootNav().pop();
  } 

}
