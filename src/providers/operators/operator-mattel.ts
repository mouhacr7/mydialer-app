import { Injectable } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { AlertController } from 'ionic-angular';

@Injectable()
export class OperatorMattelProvider {

  startNo:string;
  endNo:string='#';
  inputNo:number;
  finalVal:string;
  relationship:string;
  section: string = 'one';
  constructor(private callNumber: CallNumber,
              private alertCtrl: AlertController) {
  }
//Forfait Max Pus *167#
  present10min() {
    let alert10min = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*167*1#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (min10Mattel)');
          }
        }
      ]
    });
    return alert10min.present();
  }
  present20min() {
    let alert20min = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*167*2#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (min20Mattel)');
          }
        }
      ]
    });
    return alert20min.present();
  }
  present30min() {
    let alert30min = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*167*3#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (min30Mattel)');
          }
        }
      ]
    });
    return alert30min.present();
  }
  present60min() {
    let alert60min = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*167*4#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (min60Mattel)');
          }
        }
      ]
    });
    return alert60min.present();
  }
  //Forfait Confort *168#
  present1h() {
    let alert1h = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*168*1#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (1hMattel)');
          }
        }
      ]
    });
    return alert1h.present();
  }
  present2h() {
    let alert2h = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*168*2#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (2hMattel)');
          }
        }
      ]
    });
    return alert2h.present();
  }
  present3h() {
    let alert3h = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*168*3#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (3hMattel)');
          }
        }
      ]
    });
    return alert3h.present();
  }
  present4h() {
    let alert4h = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*168*4#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (4hMattel)');
          }
        }
      ]
    });
    return alert4h.present();
  }
  //Forfait National *166#
  present1hNat() {
    let alert1h = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*166*1#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (1hMattel)');
          }
        }
      ]
    });
    return alert1h.present();
  }
  present15minNat() {
    let alert15minNat = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*166*2#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (15minNatMattel)');
          }
        }
      ]
    });
    return alert15minNat.present();
  }
  present30minNat() {
    let alert30minNat = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*168*3#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (30minNatMattel)');
          }
        }
      ]
    });
    return alert30minNat.present();
  }
  //Forfait Minuit *165#
  present5minuit() {
    let alert5minuit = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*165*1#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (5minuitMattel)');
          }
        }
      ]
    });
    return alert5minuit.present();
  }
  present50mominuit() {
    let alert50mominuit = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*165*2#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (50mominuitMattel)');
          }
        }
      ]
    });
    return alert50mominuit.present();
  }
  present20sms() {
    let alert20sms = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*165*3#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (20smsMattel)');
          }
        }
      ]
    });
    return alert20sms.present();
  }  
  //Forfait SMS *164#
  present150SMS() {
    let alert150SMS = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*164*1#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (150SMSMattel)');
          }
        }
      ]
    });
    return alert150SMS.present();
  }
  present300SMS() {
    let alert300SMS = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*164*2#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (300SMSMattel)');
          }
        }
      ]
    });
    return alert300SMS.present();
  }
  //Forfait Internet *160#
  present100mo() {
    let alert100mo = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*160*1#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (100moMattel)');
          }
        }
      ]
    });
    return alert100mo.present();
  }
  present200mo() {
    let alert200mo = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*160*2#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (200moMattel)');
          }
        }
      ]
    });
    return alert200mo.present();
  }
  present500mo() {
    let alert500mo = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*160*3#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (500moMattel)');
          }
        }
      ]
    });
    return alert500mo.present();
  }
  present1go() {
    let alert1go = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*160*4#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (1goMattel)');
          }
        }
      ]
    });
    return alert1go.present();
  }
  present3go() {
    let alert3go = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*160*5#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (3goMattel)');
          }
        }
      ]
    });
    return alert3go.present();
  }
  present10go() {
    let alert10go = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*160*6#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (10goMattel)');
          }
        }
      ]
    });
    return alert10go.present();
  }
  present1gosoir() {
    let alert1gosoir = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*160*7#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (1gosoirMattel)');
          }
        }
      ]
    });
    return alert1gosoir.present();
  }
  //Forfait Kado 
  presentsubsKado() {
    let alertsubsKado = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*190*1#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (subsKadoMattel)');
          }
        }
      ]
    });
    return alertsubsKado.present();
  }
  presentmyKado() {
    let alertmyKado = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*190*2#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (myKadoMattel)');
          }
        }
      ]
    });
    return alertmyKado.present();
  }
  presentKado15min() {
    let alertKado15min = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*190*3*1*1#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (Kado15minMattel)');
          }
        }
      ]
    });
    return alertKado15min.present();
  }
  presentKado30min() {
    let alertKado30min = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*190*3*1*2#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (Kado30minMattel)');
          }
        }
      ]
    });
    return alertKado30min.present();
  }
  presentKado1h() {
    let alertKado1h = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*190*3*1*3#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (Kado1hMattel)');
          }
        }
      ]
    });
    return alertKado1h.present();
  }
  presentKado100mo() {
    let alertKado100mo = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*190*3*2*1#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (Kado100moMattel)');
          }
        }
      ]
    });
    return alertKado100mo.present();
  }
  presentKado300mo() {
    let alertKado300mo = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*190*3*2*2#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (Kado300moMattel)');
          }
        }
      ]
    });
    return alertKado300mo.present();
  }
  presentKado500mo() {
    let alertKado500mo = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*190*3*2*3#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (Kado500moMattel)');
          }
        }
      ]
    });
    return alertKado500mo.present();
  }
  presentKado1go() {
    let alertKado1go = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*190*3*2*4#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (Kado1goMattel)');
          }
        }
      ]
    });
    return alertKado1go.present();
  }
  presentKado25SMS() {
    let alertKado25SMS = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*190*3*3*1#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (Kado25smsMattel)');
          }
        }
      ]
    });
    return alertKado25SMS.present();
  }
  presentKado50SMS() {
    let alertKado50SMS = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*190*3*3*2#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (Kado50SMSMattel)');
          }
        }
      ]
    });
    return alertKado50SMS.present();
  }
  presentKado150SMS() {
    let alertKado150SMS = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*190*3*3*3#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (Kado150SMSMattel)');
          }
        }
      ]
    });
    return alertKado150SMS.present();
  }
  presentKado300SMS() {
    let alertKado300SMS = this.alertCtrl.create({
      title: 'Confirmer votre opération',
      message: 'Voulez-vous vraiment valider l\'opération?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
              this.callNumber.callNumber("*190*3*3*4#", true)
                .then(res => console.log('Launched dialer!', res))
                .catch(res => console.log('Error launching dialer', res));
        
            console.log('Validate clicked (Kado300SMSMattel)');
          }
        }
      ]
    });
    return alertKado300SMS.present();
  }

}
