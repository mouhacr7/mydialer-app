
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/appMattel/home/home';
import { DialerPage } from './../pages/appMattel/dialer/dialer';
import { TabsPage } from '../pages/appMattel/tabs/tabs';
import { InternetPage } from '../pages/appMattel/internet/internet';
import { MessagesPage } from '../pages/appMattel/messages/messages';
import { PopoverCreditPage } from '../pages/appMattel/popover-credit/popover-credit';
import { ConfortPage } from '../pages/appMattel/confort/confort';
import { TransferPage } from '../pages/transfer/transfer';

//Plugins
import { CallNumber } from '@ionic-native/call-number';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OperatorMattelProvider } from '../providers/operators/operator-mattel';
import { OperatorMauritelProvider } from '../providers/operators/operator-mauritel';
import { OperatorChinguitelProvider } from '../providers/operators/operator-chinguitel';




@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    DialerPage,
    TabsPage,
    InternetPage,
    MessagesPage,
    ConfortPage,
    TransferPage,
    PopoverCreditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DialerPage,
    TabsPage,
    InternetPage,
    MessagesPage,
    ConfortPage,
    TransferPage,
    PopoverCreditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OperatorMattelProvider,
    OperatorMauritelProvider,
    OperatorChinguitelProvider
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
