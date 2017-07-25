import { Component } from '@angular/core';
import {SecurityService} from "./users/security.service";
import {UsersService} from './users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(securityService: SecurityService, userService: UsersService) {
    securityService.events.subscribe(value =>{
      console.log(value)
      userService.getActiveUser()
        .subscribe(user => console.log(user))
    })


    securityService.login('admin', '123')

  }

}
