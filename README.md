
# User login Module for Angular

This is an Angular module to useful for user login in an angular app. It provides the login template, user can login and logout using this module. 

## Supports :
- Facebook
- Google

## Usage

### - Import the module in your app.component.ts file
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

### - environment.ts file :
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


### - To load login page in an angular app, you can use the below code in your template

```
<ngtek-joomla-login
 [navUrl]="navUrl"
 [userLogin]="userLogin" 
 (signInUserData)="SignInUserData($event)">
</ngtek-joomla-login>
```

### - userLogin attribute: Pass array with string name which you want to add in your login page like facebook, gmail and manual login.

```
userLogin = [
        'manual-login',
        'facebook',
        'google'
        ];
```

### - navUrl attribute: Assign the page path where you have to redirect page after login.

```
navUrl = "home"
```

signInUserData - this function is used to get login reponce.

For Bootstrap Design, import below mention line in the style.css file

```
@import "~bootstrap/dist/css/bootstrap.css";
```


