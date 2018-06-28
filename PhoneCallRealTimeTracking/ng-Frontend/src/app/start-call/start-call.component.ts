import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-start-call',
  templateUrl: './start-call.component.html',
  styleUrls: ['./start-call.component.css']
})
export class StartCallComponent implements OnInit {

  connection: HubConnection;
  connectionId: string;

  errorMessage: string;
  isStarted = false;
  callStates: string[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:44345/CallH')
      .configureLogging(LogLevel.Error)
      .build();
    this.connection.start()
      .then(() => {
        this.connection.invoke('GetConnectionId')
          .then((connectionId) => this.connectionId = connectionId);
      })
      .catch(err => {
        console.error(err.toString());
        this.errorMessage = err.toString();
      });
    this.connection.on('ChangeCallState', (newState) => {
      this.callStates.push(newState);
      console.log(newState);
    });
  }


  callCustomer() {
    this.http.post(`https://localhost:44345/api/callstate/startcall/${this.connectionId}`, {})
      .subscribe(() => this.isStarted = true, (errorResponse) => {
        console.log(errorResponse);
        this.errorMessage = errorResponse.error;
      });
  }

}
