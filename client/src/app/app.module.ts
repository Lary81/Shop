import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SecurityModule} from './security/security.module';
import {UsersModule} from './users/users.module';
import {Api} from './api';
import {SecurityGuard} from './security/security.guard';
import {SecurityService} from './security/security.service';
import {routerModule} from './app.routing';
import { ProductComponent } from './shop/products/product/product.component';
import { ShopComponent } from './shop/shop/shop.component';
import {ProductsService} from './shop/products/products.service';
import {SelfMadeComponent} from './self-made/self-made.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms';
import { ShoppingCartComponent } from './shoppingCart/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShopComponent,
    SelfMadeComponent,
    RegisterComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    SecurityModule,
    UsersModule,
    routerModule,
    FormsModule
  ],
  providers: [
    Api,
    SecurityService,
    SecurityGuard,
    ProductsService
  ],
  exports: [
    RegisterComponent,
    ShoppingCartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
