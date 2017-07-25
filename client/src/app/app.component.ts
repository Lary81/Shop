import { Component } from '@angular/core';
import {SecurityService} from "./users/security.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(securityService: SecurityService) {
    securityService.login('admin', '123')

  }

}
