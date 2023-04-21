import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  public socket = io('https://securebot.ninja');

  constructor() { }

  connect() {
    this.socket.on('news', (data) => {
      console.log(data);
      this.socket.emit('my other event', 'Hello from Angular');
    })
  }
}
