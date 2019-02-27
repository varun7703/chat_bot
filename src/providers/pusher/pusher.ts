import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


declare const Pusher: any;

@Injectable()
export class PusherProvider {
  public _pusher : any;

  constructor(public http: HttpClient) {
    this._pusher = new Pusher('9ef68ef10d4530bcb886', {
      cluster: 'ap2',
      encrypted: true
    });
  }


  getPusher(){
    return this._pusher;
  }

}
