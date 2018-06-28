import { Component, OnInit } from '@angular/core';
import { HubConnectionBuilder, LogLevel, HubConnection } from '@aspnet/signalr';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<div class="container">
                <div class="jumbotron">
                  <h1 class="display-4">Hello, SignalR</h1>
                  <p class="lead"></p>
                  <hr class="my-4">
                  <router-outlet></router-outlet>
                </div>
             </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  connection: HubConnection;
  connectionId: string;

  constructor() { }

  ngOnInit() { }
  //   this.connection = new HubConnectionBuilder()
  //     .withUrl('https://localhost:44345/mapssss')
  //     .configureLogging(LogLevel.Error)
  //     .build();
  //   this.connection.start()
  //     .then(() => {
  //       this.connection.invoke('GetConnectionId')
  //         .then((connectionId) => this.connectionId = connectionId);
  //     })
  //     .catch(err => console.error(err.toString()));
  //   this.connection.on('ChangeCallState', (message) => {
  //     console.log(message);
  //   });
  // }

  sendMessage(text: string) {
    console.log(text);
    // from(this.connection.invoke('SendMessage', { message: text })).subscribe(res => console.log(res));
    this.connection.invoke('StartCall', this.connectionId, text)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }


}
