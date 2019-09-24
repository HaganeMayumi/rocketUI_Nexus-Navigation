import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FaqPage } from '../pages/faq/faq';
import { ChatPage } from '../pages/chat/chat';
import { PergfreqPage } from '../pages/pergfreq/pergfreq';
import { ChatInPage } from '../pages/chat-in/chat-in'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FaqPage,
    ChatPage,
    PergfreqPage,
    ChatInPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FaqPage,
    ChatPage,
    PergfreqPage,
    ChatInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
