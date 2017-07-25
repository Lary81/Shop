import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class UsersService {

  private activeUserURL = 'http://localhost:8080/api-v1/users/active';

  constructor(private http: Http) { }


  getActiveUser(): Observable<any>{

    return this.http.get(this.activeUserURL).map(response => response.json())
  }
}
