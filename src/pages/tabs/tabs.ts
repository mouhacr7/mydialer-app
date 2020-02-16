import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { InternetPage } from './../internet/internet';import { DialerPage } from '../dialer/dialer';
import { MessagesPage } from './../messages/messages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DialerPage;
  tab3Root = InternetPage;
  tab4Root = MessagesPage;
  loaded:   boolean = false;
  tabIndex: number  = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
  }
}
