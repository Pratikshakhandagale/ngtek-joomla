import { Component, } from '@angular/core';
import {  LoginService } from 'user-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public loginService: LoginService) { }
  title = 'ngtek-user-login';
  userLogin = ['facebook', 'manual-login', 'google'];
 // navUrl = "sociallogin"
  SignInUserData(data) {
//   this.loginService.logout();
    console.log('getFBSignInUserData - ', data);
  }

}
