import { Component } from '@angular/core';
import { NavController, App, ViewController } from 'ionic-angular';
import { DialerPage } from '../dialer/dialer';
import { PopoverController } from 'ionic-angular';
import { PopoverCreditPage } from '../popover-credit/popover-credit';
import { CallNumber } from '@ionic-native/call-number';
import { ConfortPage } from '../confort/confort';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards = [
    0,1,2,3,4,5,6
  ]

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public appCtrl: App,
              private callNumber: CallNumber,
              public popoverCtrl: PopoverController ) {
              
  }
  goToDialer() {
    this.navCtrl.push(DialerPage);
  }
  goToConfort() {
    this.navCtrl.push(ConfortPage);
  }
  cptMattel() {
    this.callNumber.callNumber("*130#", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverCreditPage);
    popover.present({
      ev: myEvent
    });
  }

}
