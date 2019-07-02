
# User login Module

This is an Angular module to useful for user login in an angular app. It provides the login template, user can login and logout using this module. 

Compatible for Angular ≥ 7.x and Ionic  ≥ 4.x 

## Supports :
- Manual login (By entering username and password : This feature is only useful when if, your site contains the joomla user plugin)
- Facebook
- Google

## Usage

### - Import the module in your app.module.ts file
```
import { UserLoginModule, LoginService } from '@tekdi/ngtek-user-login';
 
 import { environment } from '../environments/environment';

 const config  = environment.loginConfig;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    .....
    UserLoginModule.forRoot(config),  <---
	....
  ],
  providers: [ ]
})
export class AppModule { }
```

### environment.ts file :
```
export const environment = { 
  production: false, 
  loginConfig: { 
    googleClientId: 'XXXXXXXXXdskdshkreas4drf1ihc1.apps.googleusercontent.com', 
    fbAppId: 'XXXXXX969930934', 
    baseUrl: 'https://site-base-url' 
  } 
}; 
```


### To load login page in an angular app, you can use the below code in your template

```
<ngtek-joomla-login
 [navUrl]="navUrl"
 [userLogin]="userLogin" 
 (signInUserData)="SignInUserData($event)">
</ngtek-joomla-login>
```

### ```userLogin``` attribute: Pass array with string name which you want to add in your login page like facebook, gmail and manual login.

```
userLogin = [
        'manual-login',
        'facebook',
        'google'
        ];
```

Write ```SignInUserData(data)```  function is your .ts file for getting api response.

### ```navUrl``` attribute: Assign the page path where you have to redirect page after login.

```
navUrl = "home"
```

For Bootstrap Design, import below mention line into the `.css` file
In Angular -  ```style.css ```,

In ionic -  ```global.scss``` 

```
@import "~bootstrap/dist/css/bootstrap.css";
```
### LoginService service provides the following methods :
1. ```getCurrentUser``` -  To get logged in user data
2. ```Login(username, password)``` - For login into the app
3. ```Logout``` - For logout from app
4. ```isLoggedIn``` - To check user is logged in or not

### Sample Demo 
For Angular - https://github.com/Pratikshakhandagale/ngtek-user-login-AngularDemo

For Ionic - https://github.com/Pratikshakhandagale/ngtek-user-login-IonicDemo
