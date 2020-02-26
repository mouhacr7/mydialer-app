import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-popover-credit',
  templateUrl: 'popover-credit.html',
})
export class PopoverCreditPage {
  startNo:string='*133*';
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
    console.log(this.startNo);
    this.callNumber.callNumber(this.finalVal, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }

}
