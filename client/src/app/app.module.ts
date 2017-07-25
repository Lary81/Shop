import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import {SecurityService} from './users/security.service';
import {requestOptionsProvider} from "./users/DefaultRequestOptions";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule
  ],
  providers: [
    SecurityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
