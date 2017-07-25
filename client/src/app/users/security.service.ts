import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class SecurityService {

  private oauthServerUrl  = "http://localhost:8080/oauth/token"

  constructor(private http: Http) {

  }

  login(username: string, password: string):Observable<any> {
   let payload = this.preparePayLoad(username,password)
   return this.http.post(this.oauthServerUrl,payload)
     .map(response => response.json())

  }
private preparePayLoad (username: string, password: string ):URLSearchParams {
    let payload = new URLSearchParams()
  payload.set('username', username )
  payload.set('password', password )
  payload.set('grant_type', 'password' )
  payload.set('client_id', 'connect-app' )
  return payload
}
}
