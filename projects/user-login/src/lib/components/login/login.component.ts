import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

//Service
import { LoginService } from '../../providers/login.service'


@Component({
  selector: 'app-joomla-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  siteUrl: string;
  @Input() sociallogin: boolean;
  @Input() facebook: boolean;
  @Input() google: boolean;
  @Input() navUrl: string;
  @Output() loginUserData = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.siteUrl = localStorage.getItem('baseUrl');
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  //get f() { return this.loginForm.controls; }

  public doLogin() {
    //console.log('this.loginForm - ', this.loginForm);
    //console.log('this.f - ', this.f);

    if (!this.loginForm.controls.username.valid) {
      alert('Please Enter Username/E-mail');
    } else if (!this.loginForm.controls.password.valid) {
      alert('Please Enter Password');
    } else {
      this.loginService.init(this.siteUrl);
      this.loginService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe((res) => {
        if (this.navUrl && !res['err_code']) {
          this.router.navigate(['/' + this.navUrl]);
        } else {
          this.loginUserData.emit(res);
        }
      });
    }
  }
}

