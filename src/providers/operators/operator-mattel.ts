import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component } from "@angular/core";
import { CallNumber } from '@ionic-native/call-number';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the OperatorMattelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OperatorMattelProvider {

  startNo:string;
  endNo:string='#';
  inputNo:number;
  finalVal:string;
  relationship:string;
  section: string = 'one';
  constructor(private callNumber: CallNumber,
              private alertCtrl: AlertController) {
  }
//Forfait Max Pus 
  present10min() {
    let alert10min = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*167*1#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (min10Mattel)');
          }
        }
      ]
    });
    return alert10min.present();
  }
  present20min() {
    let alert10min = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*167*2#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (min20Mattel)');
          }
        }
      ]
    });
    return alert10min.present();
  }
  present30min() {
    let alert10min = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*167*3#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (min30Mattel)');
          }
        }
      ]
    });
    return alert10min.present();
  }
  present60min() {
    let alert10min = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*167*4#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (min60Mattel)');
          }
        }
      ]
    });
    return alert10min.present();
  }

}
