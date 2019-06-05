import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Accept-Datetime,Accept',
    'Access-Control-Expose-Headers': 'Content-Location,Link,Memento-Datetime',
    'Content-Type': 'application/json'
  })   
}

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url: string = 'http://localhost:3000/send';
  constructor(private httpClient: HttpClient) { }
  sendMessage(messageContent: any){
    return this.httpClient.post(this.url,
      JSON.stringify(messageContent),
      httpOptions);
  }
}