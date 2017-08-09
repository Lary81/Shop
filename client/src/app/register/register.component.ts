import { Component, OnInit } from '@angular/core';
import {SecurityService} from '../security/security.service';
import {Router} from '@angular/router';



@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  username: string;
  password: string;
  registerError: boolean;
  pendingRequest = false;

  constructor(private securityService: SecurityService, private router: Router) {
  }

  register() {
    this.pendingRequest = true;
    this.securityService.register(this.username, this.password)
  }}
