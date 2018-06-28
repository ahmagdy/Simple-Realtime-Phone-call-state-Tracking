import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HubConnectionBuilder, HubConnection, LogLevel } from '@aspnet/signalr';

@Component({
  selector: 'app-call-control',
  templateUrl: './call-control.component.html',
  styleUrls: ['./call-control.component.css']
})
export class CallControlComponent implements OnInit {
  connection: HubConnection;
  clientConnectionId: string;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:44345/CallH')
      .configureLogging(LogLevel.Information)
      .build();
    this.connection.start()
      .catch(err => console.error(err.toString()));
    this.connection.on('StartCall', (callerConnectionId) => {
      this.clientConnectionId = callerConnectionId;
      console.log(callerConnectionId);
    });
  }

  changeCallState(state: string) {
    const now = new Date();
    this.http.post(`https://localhost:44345/api/callstate/change`, {
      connectionId: this.clientConnectionId,
      callState: state,
      CallTime: now
    }).subscribe();
  }

}
