import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './security/login-form/login-form.component'

const routesConfig = [
  {
    path: 'login', component: LoginFormComponent
  }
]

export const routerModule = RouterModule.forRoot(routesConfig)
