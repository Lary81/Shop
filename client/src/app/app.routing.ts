import {Route, RouterModule} from '@angular/router';
import {LoginFormComponent} from './security/login-form/login-form.component'
import {SecurityGuard} from './security/security.guard';
import {UsersListComponent} from './users/users-list/users-list.component';
import {ProductComponent} from './shop/products/product/product.component';
import {SelfMadeComponent} from './self-made/self-made.component';
import {RegisterComponent} from './register/register.component';
import {ShoppingCartComponent} from './shoppingCart/shopping-cart/shopping-cart.component';

const routesConfig: [Route] = [
  {
    path: 'login', component: LoginFormComponent
  },

  {
    path: '', canActivate: [SecurityGuard], children: [
    {
      path: 'users', component: UsersListComponent
    },
    {
      path: 'products', component: ProductComponent
    },
    {
      path: 'self-made', component: SelfMadeComponent
    },
    {
      path: 'register', component: RegisterComponent
    },
    {
      path: 'cart', component: ShoppingCartComponent
    }
  ]
  }
]

export const routerModule = RouterModule.forRoot(routesConfig)
