import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//import { UserLoginModule } from '@tekdi/ngtek-user-login';

import { UserLoginModule } from 'projects/user-login/src/lib/user-login.module';
import { environment } from '../environments/environment';
const config  = environment.loginConfig;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserLoginModule.forRoot(config),
    MDBBootstrapModule.forRoot()
  ],
  providers: [ ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
