import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { SecurityService } from './users/security.service';
import { UsersService } from './users/users.service';
import { Api } from './api';
import { LoginformComponent }from './register/loginform/loginform.component';
import {FormsModule} from '@angular/forms';
import {routerModule} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    FormsModule,
    //SecurityModule,
    routerModule
  ],
  providers: [
    SecurityService,
    UsersService,
    Api
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
