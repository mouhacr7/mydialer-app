import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HomeChinguitelPage } from '../home-chinguitel/home-chinguitel';
import { DialerChinguitelPage } from '../dialer-chinguitel/dialer-chinguitel';
import { InternetChinguitelPage } from '../internet-chinguitel/internet-chinguitel';
import { MessagesChinguitelPage } from '../messages-chinguitel/messages-chinguitel';

@Component({
  selector: 'page-tabs-chinguitel',
  templateUrl: 'tabs-chinguitel.html',
})
export class TabsChinguitelPage {
  tabChinguitel1Root = HomeChinguitelPage;
  tabChinguitel2Root = DialerChinguitelPage;
  tabChinguitel3Root = InternetChinguitelPage;
  tabChinguitel4Root = MessagesChinguitelPage;
  loaded:   boolean = false;
  tabIndex: number  = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsChinguitelPage');
  }

}
