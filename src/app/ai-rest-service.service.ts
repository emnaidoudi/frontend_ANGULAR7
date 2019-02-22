import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable()
export class AiRestServiceService {
endpoint = 'http://localhost:5000/';
httpOptions = {
headers: new HttpHeaders({
  'Content-Type':  'application/json'
})
};
  constructor(private http: HttpClient) { }
private extractData(res: Response) {
  let body = res;
  return body || { };
}
getpost(): Observable<any> {
  return this.http.get(this.endpoint + 'postjson').pipe(
    map(this.extractData));
}
}
