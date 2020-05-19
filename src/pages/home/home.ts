import { ChatProvider } from '../../providers/chat/chat';
import { IChat } from '../../models/chat';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import {TextToSpeech} from '@ionic-native/text-to-speech'; 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  chats : IChat[] = [];
  message : string;
  sending : boolean;
  bgcolor: string = 'white';
  text: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _chat : ChatProvider, private speechRecognition: SpeechRecognition,private tts: TextToSpeech) {
    this.speechRecognition.requestPermission()
  .then(
    () => console.log('Granted'),
    () => console.log('Denied')
  )
  }
  ionViewDidLoad() {
     // subscribe to pusher's event
     this._chat.getChannel().bind('chat', data => {
      if(data.type !== 'bot'){
        data.isMe = true;
      };
      console.log(data);
      if(data.type == 'bot'){
      this.tts.speak(data.message);}
      this.chats.push(data);
    });
  }
  async sendMessage(chat):Promise<any> {
    this.sending = true;
    this._chat.sendMessage(this.message)
      .subscribe(resp => {
        this.message = '';
        this.sending = false;
      }, err => {
        this.sending = false;
      } );
      try{
       this.tts.speak(chat.message);
      }
      catch(e){
        console.log(e);
      }

  }
  clear(){
    this.chats.pop();
  }

  start() {
    this.speechRecognition.startListening()
    .subscribe(
      (matches: Array<string>) => {console.log(matches),
      (onerror) => console.log('error:', onerror),
      this.message = matches[0];}
    )
  

}
async sayText():Promise<any>{
  try{
    await this.tts.speak(this.message);
  }
  catch(e){
    console.log(e);
  }
}
}
