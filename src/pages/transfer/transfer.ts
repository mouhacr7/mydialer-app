import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {

  constructor(private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferPage');
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

}
