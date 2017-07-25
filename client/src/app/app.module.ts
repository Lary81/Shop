import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SecurityModule } from './security/security.module';
import { UsersModule } from './users/users.module';
import { Api } from './api';
import { SecurityGuard } from './security/security.guard';
import { routerModule } from './app.routing';
import {SecurityService} from "./security/security.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SecurityModule,
    UsersModule,
    routerModule
  ],
  providers: [
    Api,
    SecurityService,
    SecurityGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
