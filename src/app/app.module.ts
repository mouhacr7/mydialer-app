
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//Root page for the whole app 
import { HomeRootPage } from '../pages/home-root/home-root';
//Mattel pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/appMattel/home/home';
import { DialerPage } from '../pages/appMattel/dialer/dialer';
import { TabsPage } from '../pages/appMattel/tabs/tabs';
import { InternetPage } from '../pages/appMattel/internet/internet';
import { MessagesPage } from '../pages/appMattel/messages/messages';
import { PopoverCreditPage } from '../pages/appMattel/popover-credit/popover-credit';
import { ConfortPage } from '../pages/appMattel/confort/confort';
import { TransferPage } from '../pages/transfer/transfer';
//Mauritel pages
import { HomeMauritelPage } from '../pages/appMauritel/home-mauritel/home-mauritel';
import { InternetMauritelPage } from '../pages/appMauritel/internet-mauritel/internet-mauritel';
import { MessagesMauritelPage } from '../pages/appMauritel/messages-mauritel/messages-mauritel';
import { PopoverCreditMauritelPage } from '../pages/appMauritel/popover-credit-mauritel/popover-credit-mauritel';
import { TabsMauritelPage } from '../pages/appMauritel/tabs-mauritel/tabs-mauritel';
import { DialerMauritelPage } from '../pages/appMauritel/dialer-mauritel/dialer-mauritel';
//Chinguitel pages
import { DialerChinguitelPage } from '../pages/appChinguitel/dialer-chinguitel/dialer-chinguitel';
import { HomeChinguitelPage } from '../pages/appChinguitel/home-chinguitel/home-chinguitel';
import { InternetChinguitelPage } from '../pages/appChinguitel/internet-chinguitel/internet-chinguitel';
import { MessagesChinguitelPage } from '../pages/appChinguitel/messages-chinguitel/messages-chinguitel';
import { PopoverCreditChinguitelPage } from '../pages/appChinguitel/popover-credit-chinguitel/popover-credit-chinguitel';
import { TabsChinguitelPage } from '../pages/appChinguitel/tabs-chinguitel/tabs-chinguitel';
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
    HomeRootPage,
     //mattel declarations
    HomePage, 
    DialerPage,
    TabsPage,
    InternetPage,
    MessagesPage,
    ConfortPage,
    TransferPage,
    PopoverCreditPage,
    //mauritel declarations
    HomeMauritelPage,
    InternetMauritelPage,
    MessagesMauritelPage,
    PopoverCreditMauritelPage,
    TabsMauritelPage,
    DialerMauritelPage,
     //chinguitel declarations
     DialerChinguitelPage,
     HomeChinguitelPage,
     InternetChinguitelPage,
     MessagesChinguitelPage,
     PopoverCreditChinguitelPage,
     TabsChinguitelPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeRootPage,
   //mattel declarations
   HomePage, 
   DialerPage,
   TabsPage,
   InternetPage,
   MessagesPage,
   ConfortPage,
   TransferPage,
   PopoverCreditPage,
   //mauritel declarations
   HomeMauritelPage,
   InternetMauritelPage,
   MessagesMauritelPage,
   PopoverCreditMauritelPage,
   TabsMauritelPage,
   DialerMauritelPage,
    //chinguitel declarations
    DialerChinguitelPage,
    HomeChinguitelPage,
    InternetChinguitelPage,
    MessagesChinguitelPage,
    PopoverCreditChinguitelPage,
    TabsChinguitelPage,
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
