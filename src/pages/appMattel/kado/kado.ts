import { Component } from '@angular/core';
import { OperatorMattelProvider } from '../../../providers/operators/operator-mattel';

@Component({
  selector: 'page-kado',
  templateUrl: 'kado.html',
})
export class KadoPage {
  section: string = 'one';
  constructor(public opMattelProvider: OperatorMattelProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KadoPage');
  }

  presentmyKado(){
    this.opMattelProvider.presentmyKado();
  }
  presentsubsKado(){
    this.opMattelProvider.presentsubsKado();
  }
  presentKado15min(){
    this.opMattelProvider.presentKado15min();
  }
  presentKado30min(){
    this.opMattelProvider.presentKado30min();
  }
  presentKado1h(){
    this.opMattelProvider.presentKado1h();
  }
  presentKado100mo(){
    this.opMattelProvider.presentKado100mo();
  }
  presentKado300mo(){
    this.opMattelProvider.presentKado300mo();
  }
  presentKado500mo(){
    this.opMattelProvider.presentKado500mo();
  }
  presentKado1go(){
    this.opMattelProvider.presentKado1go();
  }
  presentKado25SMS(){
    this.opMattelProvider.presentKado25SMS();
  }
  presentKado50SMS(){
    this.opMattelProvider.presentKado50SMS();
  }
  presentKado150SMS(){
    this.opMattelProvider.presentKado150SMS();
  }
  presentKado300SMS(){
    this.opMattelProvider.presentKado300SMS();
  }

}
