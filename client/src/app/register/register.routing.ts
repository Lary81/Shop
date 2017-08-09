
import {RegisterComponent} from './register.component';
import {Route, RouterModule} from '@angular/router';

const routesConfig: [Route] = [
  {
    path: 'register', component: RegisterComponent
  }
]
export const routerModule = RouterModule.forChild(routesConfig)
