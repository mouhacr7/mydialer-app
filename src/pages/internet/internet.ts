import { Component } from '@angular/core';
import {NavController, NavParams, ModalController } from 'ionic-angular';
import { IntModalComponent } from '../../components/int-modal/int-modal';

@Component({
  selector: 'page-internet',
  templateUrl: 'internet.html',
})
export class InternetPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternetPage');
  }

  presentProfileModal() {
        let profileModal = this.modalCtrl.create(IntModalComponent);
    
        // fires after dismiss animation finishes
        // profileModal.onDidDismiss(data => {
        //     console.log(data);
        //   });
      
        //   // fires before dismiss animation begins
        // profileModal.onWillDismiss(data => {
        //     console.log(data);
        //   });
      
        profileModal.present();
      }

}
