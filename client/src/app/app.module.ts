import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { SecurityService } from './users/security.service';
import { UsersService } from './users/users.service';
import { Api } from './api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule
  ],
  providers: [
    SecurityService,
    UsersService,
    Api
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
