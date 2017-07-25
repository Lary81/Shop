import {Component} from '@angular/core';
import {SecurityService} from "./users/security.service";
import {UsersService} from "./users/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(securityService: SecurityService, usersService: UsersService) {
    securityService.login('admin', '123')
      .subscribe(value => {
        usersService.getActiveUser().subscribe(user => console.log(user))
      })
  }

}
