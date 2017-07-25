import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { SecurityService } from './users/security.service';
import { UsersService } from './users/users.service';
import config from './config';

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
    { provide: 'config', useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
