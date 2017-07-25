import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UsersService {

  private activeUserUrl = 'http://localhost:8080/api-v1/users/active';

  constructor(private http: Http) {
  }

  getActiveUser(): Observable<any> {
    return this.http.get(this.activeUserUrl)
      .map(response => response.json())
  }

}
