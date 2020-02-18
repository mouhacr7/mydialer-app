import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { OperatorMattelProvider } from "../../../providers/operators/operator-mattel";

@Component({
  selector: 'page-internet',
  templateUrl: 'internet.html',
})
export class InternetPage {
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
    console.log('ionViewDidLoad InternetPage');
  }

  present100mo(){
    this.opMattelProvider.present100mo();
  }
  present200mo(){
    this.opMattelProvider.present200mo();
  }
  present500mo(){
    this.opMattelProvider.present500mo();
  }
  present1go(){
    this.opMattelProvider.present1go();
  }
  present3go(){
    this.opMattelProvider.present3go();
  }
  present10go(){
    this.opMattelProvider.present10go();
  }
  present1gosoir(){
    this.opMattelProvider.present1gosoir();
  }
  cptMattel() {
    this.callNumber.callNumber("*130#", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }
}
