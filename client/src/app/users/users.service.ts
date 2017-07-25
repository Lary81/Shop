import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Api } from '../api';
import 'rxjs/add/operator/map';
import {User} from "./user";

@Injectable()
export class UsersService {

  constructor(private http: Http, private api: Api ) {
  }

  getActiveUser(): Observable<User> {
    return this.http.get(this.api.activeUser)
      .map(response => response.json())
      .map(json => new User(json))
  }

}
