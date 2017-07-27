
import {Route, RouterModule} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {SecurityGuard} from '../../security/security.guard';
import {ProductResolver} from './product.resolver';

const routesConfig: [Route] = [

{
  path: 'app-product', component: ProductComponent
}
]
export const routerModule = RouterModule.forChild(routesConfig)
