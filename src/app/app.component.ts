import { Component} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {TabsPage} from "../pages/appMattel/tabs/tabs";
// import { HomeRootPage } from '../pages/home-root/home-root';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //Background home root color=rgb(171, 17, 78) #ab114e

  rootPage: any = TabsPage;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
