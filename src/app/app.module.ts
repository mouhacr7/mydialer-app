
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

//Plugins
import { CallNumber } from '@ionic-native/call-number';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ThemeProvider } from '../providers/theme/theme';
import { IntModalComponent } from '../components/int-modal/int-modal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DialerPage,
    TabsPage,
    InternetPage,
    MessagesPage,
    IntModalComponent,
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
    PopoverCreditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ThemeProvider
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
	exports: [IntModalComponent]
})
export class AppModule {}
