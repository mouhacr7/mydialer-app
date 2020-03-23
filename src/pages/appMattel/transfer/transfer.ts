import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, ViewController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';


@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {
   
  startNo:string='*131*';
  endNo:string='#';
  sepNo:string='*';
  inputTel:number;
  inputAmount:number;
  inputPin:number;
  finalVal:string; 
  relationship:string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private callNumber: CallNumber,
    public viewCtrl: ViewController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }
  // Recharger compte Button
  transfert(){
    this.finalVal = this.startNo+this.inputTel+this.sepNo+this.inputAmount+this.sepNo+this.inputPin+this.endNo;
    console.log(this.finalVal);
    this.callNumber.callNumber(this.finalVal, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }

}
