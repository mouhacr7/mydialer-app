import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { AlertController } from 'ionic-angular';
import { OperatorMattelProvider } from "../../providers/operators/operator-mattel";

@Component({
  selector: 'page-confort',
  templateUrl: 'confort.html',
})
export class ConfortPage {

  startNo:string;
  endNo:string='#';
  inputNo:number;
  finalVal:string;
  relationship:string;
  section: string = 'one';
  constructor(private callNumber: CallNumber,
              private alertCtrl: AlertController,
              public opMattelProvider: OperatorMattelProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DialerPage');
  }
  presentConfirm10min() {
    this.opMattelProvider.present10min();
  }
  presentConfirm20min() {
    this.opMattelProvider.present20min();
  }
  presentConfirm30min() {
    this.opMattelProvider.present30min();
  }
  presentConfirm60min() {
    this.opMattelProvider.present60min();
  }
  cptMattel() {
    this.callNumber.callNumber("*130#", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }


  recharge(){
    this.finalVal = this.startNo+this.inputNo+this.endNo;
    console.log(this.inputNo);
    this.callNumber.callNumber(this.finalVal, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }

}
