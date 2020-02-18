import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';

import { OperatorMattelProvider } from "../../../providers/operators/operator-mattel";

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
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
    console.log('ionViewDidLoad MessagesPage');
  }
  presentConfirm150SMS() {
    this.opMattelProvider.present150SMS();
  }
  presentConfirm300SMS() {
    this.opMattelProvider.present300SMS();
  }
 
  cptMattel() {
    this.callNumber.callNumber("*130#", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }


}
