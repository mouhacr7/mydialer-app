import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';

import { OperatorMattelProvider } from "../../../providers/operators/operator-mattel";

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
              public opMattelProvider: OperatorMattelProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DialerPage');
  }
  presentConfirm1h() {
    this.opMattelProvider.present1h();
  }
  presentConfirm2h() {
    this.opMattelProvider.present2h();
  }
  presentConfirm3h() {
    this.opMattelProvider.present3h();
  }
  presentConfirm4h() {
    this.opMattelProvider.present4h();
  }
  cptMattel() {
    this.callNumber.callNumber("*130#", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }
}
