import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { UserLoginComponent } from './user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutingModule } from './user-login-routing.module';

//Componenets
import { SocialloginComponent } from './components/sociallogin/sociallogin.component'
import { LoginComponent } from './components/login/login.component';

//Providers
import { LoginService } from './providers/login.service';
import { SocialloginService } from './providers/sociallogin.service';

//Social login third party module
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

const userRoutes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'manuallogin', component: LoginComponent },
  { path: 'sociallogin', component: SocialloginComponent },
];

var googleClientId : string ='';
var fbAppId : string ='';
var configsocial : any ='';

interface loginConfigInterface {
  googleClientId: string,
  fbAppId: string,
  baseUrl: string
}

const ConfigData = new InjectionToken<loginConfigInterface>("loginConfigInterface");

@NgModule({
  declarations: [
    UserLoginComponent,
    LoginComponent,
    SocialloginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule,
   RouterModule.forRoot(userRoutes),
   UserRoutingModule

  ],
  exports: [
    UserLoginComponent,
    LoginComponent,
    SocialloginComponent,
    RouterModule
  ],
  providers: [
    LoginService,
    SocialloginService
  ]
})


export class UserLoginModule extends LoginService {

  static forRoot(config: loginConfigInterface): ModuleWithProviders {
    localStorage.setItem('baseUrl', config.baseUrl);
    configsocial = new AuthServiceConfig([
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(config.googleClientId)
      },
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider(config.fbAppId)
      }
    ]);
    function provideConfig() {
      return configsocial;
    }
    
    fbAppId = config.fbAppId;
    return {
      ngModule: UserLoginModule,
      providers: [
        {
          provide: ConfigData,
          useValue: config
        },
        {
          provide: AuthServiceConfig,
          useFactory: provideConfig
        }
      ]
    }
  }
}






