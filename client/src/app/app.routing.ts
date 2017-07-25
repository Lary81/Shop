
import {RouterModule} from '@angular/router'
import {LoginformComponent} from './register/loginform/loginform.component'


const routesConfig = [

  {
    path: 'login', component: LoginformComponent

  }
]
export const  routerModule = RouterModule.forRoot(routesConfig)
