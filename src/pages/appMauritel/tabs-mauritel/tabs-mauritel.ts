import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomeMauritelPage } from '../home-mauritel/home-mauritel';
import { DialerMauritelPage } from '../dialer-mauritel/dialer-mauritel';
import { InternetMauritelPage } from '../internet-mauritel/internet-mauritel';
import { MessagesMauritelPage } from '../messages-mauritel/messages-mauritel';

@Component({
  selector: 'page-tabs-mauritel',
  templateUrl: 'tabs-mauritel.html',
})

export class TabsMauritelPage {
  tabMauritel1Root = HomeMauritelPage;
  tabMauritel2Root = DialerMauritelPage;
  tabMauritel3Root = InternetMauritelPage;
  tabMauritel4Root = MessagesMauritelPage;
  loaded:   boolean = false;
  tabIndex: number  = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsMauritelPage');
  }

}
