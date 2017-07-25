import {Inject, Injectable} from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';

@Injectable()
export class SecurityService {

  events: Observable<boolean>

  private authenticationEvents = new Subject<boolean>()

  constructor(private http: Http, private requestOptions: RequestOptions, @Inject('config') private config) {
    this.events = this.authenticationEvents.asObservable()
  }

  login(username: string, password: string): Observable<boolean> {
    let payload = this.preparePayload(username, password)
    return this.http.post(this.config.api.oauthServer, payload)
      .map(response => response.json())
      .map(json => json.access_token)
      .do(token => this.onLoginSuccess(token))
      .mapTo(true)
  }

  logout() {
    this.removeAuthorizationHeader()
    this.authenticationEvents.next(false)
  }

  private onLoginSuccess(token: string) {
    this.setAuthorizationToken(token)
    this.authenticationEvents.next(true)
  }

  private removeAuthorizationHeader() {
    this.requestOptions.headers.delete('Authorization')
  }

  private setAuthorizationToken(token: string) {
    this.requestOptions.headers.set('Authorization', `Bearer ${token}`)
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
