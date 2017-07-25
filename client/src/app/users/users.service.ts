import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http, @Inject('config') private config) {
  }

  getActiveUser(): Observable<any> {
    return this.http.get(this.config.api.activeUser)
      .map(response => response.json())
  }

}
