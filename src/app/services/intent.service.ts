import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class IntentService {
  public static intentTypes = {
    'mobile': 'Mobile number',
    'email': 'Email',
    'free_text': 'Free Text',
    'number': 'Number',
    'list': 'List',
  };

  URL_INTENT_CRUD='http://127.0.0.1:4200/api/intents/';

  constructor(public http: HttpClient) {
  }


  getIntents(){
    return this.http.get(this.URL_INTENT_CRUD);
  }

  getIntent(id) {
    return this.http.get(environment.ikyBackend + `intents/${id}`).toPromise();
  }

  saveIntent(intent) {
    if (intent._id) {
      return this.update_intent(intent);
    } else {
      delete intent._id;
      return this.create_intent(intent);
    }
  }

  create_intent(intent) {
    return this.http.post(this.URL_INTENT_CRUD,intent);
  }

  update_intent(intent) {
    return this.http.put(environment.ikyBackend + `intents/${intent._id}`, intent);
  }

  delete_intent(tag) {
    return this.http.delete(this.URL_INTENT_CRUD+tag);
  }

  importIntents(fileToUpload: File){
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http
      .post(environment.ikyBackend +"intents/import", formData).toPromise();
  }

}

