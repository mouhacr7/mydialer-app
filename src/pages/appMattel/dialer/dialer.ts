import { Component } from "@angular/core";
import { CallNumber } from '@ionic-native/call-number';
import { OperatorMattelProvider } from "../../../providers/operators/operator-mattel";

@Component({
  selector: 'page-dialer',
  templateUrl: 'dialer.html',
})
export class DialerPage {
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
  //Forfait Max + Nat
  presentConfirm10min() {
    this.opMattelProvider.present10min();
  }
  presentConfirm15minNat() {
    this.opMattelProvider.present15minNat();
  }
  presentConfirm20min() {
    this.opMattelProvider.present20min();
  }
  presentConfirm30minNat() {
    this.opMattelProvider.present30minNat() ;
  }
  presentConfirm30min() {
    this.opMattelProvider.present30min();
  }
  presentConfirm1hNat() {
    this.opMattelProvider.present1hNat();
  }
  presentConfirm60min() {
    this.opMattelProvider.present60min();
  }

  // Forfait Minuit
  presentConfirm5minuit() {
    this.opMattelProvider.present5minuit();
  }
  presentConfirm50mominuit() {
    this.opMattelProvider.present50mominuit();
  }
  presentConfirm20sms() {
    this.opMattelProvider.present20sms();
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
