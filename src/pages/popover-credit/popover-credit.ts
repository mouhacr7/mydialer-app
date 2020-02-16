import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
@Component({
//   template: `
//   <ion-list>
//     <ion-list-header>Ionic</ion-list-header>
//     <button ion-item (click)="close()">Learn Ionic</button>
//     <button ion-item (click)="close()">Documentation</button>
//     <button ion-item (click)="close()">Showcase</button>
//     <button ion-item (click)="close()">GitHub Repo</button>
//   </ion-list>
// `
  selector: 'page-popover-credit',
  templateUrl: 'popover-credit.html',
})
export class PopoverCreditPage {
  startNo:"*133*";
  endNo:string='#';
  inputNo:number;
  finalVal:string;
  relationship:string;
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private callNumber: CallNumber,
              public viewCtrl: ViewController  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverCreditPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }
  // Recharger compte Button
  recharge(){
    this.finalVal = this.startNo+this.inputNo+this.endNo;
    console.log(this.inputNo);
    this.callNumber.callNumber(this.finalVal, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }

}
