import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class ChatService {

  constructor(private http:HttpClient) { }

  converse(intent, botId = 'default') {
    return this.http.post(environment.ikyBackend + `api/v1`, intent).toPromise();
  }

  getResponse(msg:string){
    return this.http.get("http://127.0.0.1:4200/api/chatbot/basic/"+msg);
  }

}
