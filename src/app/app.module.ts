
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DialerPage } from './../pages/dialer/dialer';
import { TabsPage } from '../pages/tabs/tabs';
import { InternetPage } from '../pages/internet/internet';
import { MessagesPage } from '../pages/messages/messages';
import { PopoverCreditPage } from '../pages/popover-credit/popover-credit';
import { ConfortPage } from '../pages/confort/confort';

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
    ListPage,
    DialerPage,
    TabsPage,
    InternetPage,
    MessagesPage,
    ConfortPage,
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
    ListPage,
    DialerPage,
    TabsPage,
    InternetPage,
    MessagesPage,
    ConfortPage,
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
