import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  public socket = io('https://159.203.186.210:3333');

  constructor() { }

  connect() {
    this.socket.on('news', (data) => {
      console.log(data);
      this.socket.emit('my other event', 'Hello from Angular');
    })
  }
}
