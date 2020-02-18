import { Component } from '@angular/core';
import { NavController, App, ViewController, AlertController } from 'ionic-angular';

import { PopoverController } from 'ionic-angular';
import { PopoverCreditPage } from '../popover-credit/popover-credit';
import { CallNumber } from '@ionic-native/call-number';
import { DialerPage } from '../dialer/dialer';
import { ConfortPage } from '../confort/confort';
import { MessagesPage } from '../messages/messages';
import { InternetPage } from '../internet/internet';

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
              private alertCtrl: AlertController,
              private callNumber: CallNumber,
              public popoverCtrl: PopoverController ) {
              
  }
  goToDialer() {
    this.navCtrl.push(DialerPage);
  }
  goToConfort() {
    this.navCtrl.push(ConfortPage);
  }
  goToSms() {
    this.navCtrl.push(MessagesPage);
  }
  goToInternet() {
    this.navCtrl.push(InternetPage);
  }
  
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Désolé',
      message: 'Le service de transfert de crédit est en cours de développement! ce service sera fonctionnel dans la prochaine mise à jour...',
      buttons: [
        {
          text: 'D\'accord',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    return alert.present();
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
