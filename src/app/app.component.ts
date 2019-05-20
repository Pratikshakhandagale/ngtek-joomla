import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }
  title = 'ngtek-user-login';
  userLogin = ['facebook', 'manual-login', 'google'];
  navUrl = "sociallogin"
  SignInUserData(data) {
    alert(' Login event getting');
    console.log('getFBSignInUserData - ', data);
  }
}
