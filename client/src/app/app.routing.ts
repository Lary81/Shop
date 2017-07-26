import {Route, RouterModule} from '@angular/router';
import {LoginFormComponent} from './security/login-form/login-form.component'
import {SecurityGuard} from './security/security.guard';
import {UsersListComponent} from './users/users-list/users-list.component';

const routesConfig: [Route] = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: '**', redirectTo: 'users'
  },
  {
    path: '', canActivate: [SecurityGuard], children: [
    {
      path: 'users', component: UsersListComponent
    }
  ]
  }
]

export const routerModule = RouterModule.forRoot(routesConfig)
