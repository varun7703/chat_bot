
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { ChatProvider } from '../providers/chat/chat';
import { PusherProvider } from '../providers/pusher/pusher';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomePage } from '../pages/home/home';
import {SpeechRecognition}from '@ionic-native/speech-recognition';
import {TextToSpeech} from '@ionic-native/text-to-speech'; 
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
 
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatProvider,
    PusherProvider,
    SpeechRecognition,
    TextToSpeech
    
    
  ]
})
export class AppModule {}
