
import {ShoppingCartComponent} from './shopping-cart.component';
import {Route, RouterModule} from '@angular/router';

const routesConfig: [Route] = [
  {
    path: 'cart', component: ShoppingCartComponent
  }
]
export const routerModule = RouterModule.forChild(routesConfig)
