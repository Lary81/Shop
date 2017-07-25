import {Injectable} from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SecurityService {

  private oauthServerUrl = "http://localhost:8080/oauth/token"

  constructor(private http: Http, private requestOptions: RequestOptions) {
  }

  login(username: string, password: string) {
    let payload = this.preparePayload(username, password)
    return this.http.post(this.oauthServerUrl, payload)
      .map(response => response.json().access_token)
      .subscribe(token => this.requestOptions.headers.set('Authorization', `Bearer ${token}`))
  }

  private preparePayload(username: string, password: string): URLSearchParams {
    let payload = new URLSearchParams()
    payload.set('username', username)
    payload.set('password', password)
    payload.set('grant_type', 'password')
    payload.set('client_id', 'connect-app')
    return payload
  }

}
