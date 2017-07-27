import {Route, RouterModule} from '@angular/router';
import {SelfMadeComponent} from './self-made.component';

const routesConfig: [Route] = [
{
  path: 'self-made', component: SelfMadeComponent
}
]
export const routerModule = RouterModule.forChild(routesConfig)
