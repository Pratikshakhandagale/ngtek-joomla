(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../projects/user-login/src/lib/components/login/login.component.html":
/*!****************************************************************************!*\
  !*** ../projects/user-login/src/lib/components/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default form login -->\n<form class=\"text-center border-light p-3\" [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n\n  <div class=\"container\">\n\n    <p class=\"h4 mb-4\">Sign in</p>\n  \n    <!-- Email -->\n    <input class=\"rr\" required formControlName=\"username\" type=\"text\" class=\"form-control mb-4\" placeholder=\"E-mail/Username\">\n  \n    <!-- Password -->\n    <input required formControlName=\"password\" type=\"password\" class=\"form-control mb-4\" placeholder=\"Password\">\n  \n    <!-- Sign in button -->\n    <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\"><span class=\"text-capitalize\">Login</span></button>\n  </div>\n  </form>\n  \n  <!-- Default form login -->\n  "

/***/ }),

/***/ "../projects/user-login/src/lib/components/login/login.component.scss":
/*!****************************************************************************!*\
  !*** ../projects/user-login/src/lib/components/login/login.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: Arial, Helvetica, sans-serif; }\n\nform {\n  border: 3px solid #f1f1f1; }\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box; }\n\nbutton {\n  background-color: #2C76B3;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%; }\n\nbutton:hover {\n  opacity: 0.8; }\n\n.container {\n  padding: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90dHBsbHQyOC9Eb2N1bWVudHMvaHRkb2MvbXktbnBtLXBrZy9uZ3Rlay11c2VyLWxvZ2luL3Byb2plY3RzL3VzZXItbG9naW4vc3JjL2xpYi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU0seUNBQXlDLEVBQUE7O0FBQy9DO0VBQU0seUJBQXlCLEVBQUE7O0FBRS9CO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZLEVBQUE7O0FBSWQ7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2xpYi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7fVxuZm9ybSB7Ym9yZGVyOiAzcHggc29saWQgI2YxZjFmMTt9XG5cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkM3NkIzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "../projects/user-login/src/lib/components/login/login.component.ts":
/*!**************************************************************************!*\
  !*** ../projects/user-login/src/lib/components/login/login.component.ts ***!
  \**************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../projects/user-login/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/login.service */ "../projects/user-login/src/lib/providers/login.service.ts");



//import { HttpClient, HttpHeaders } from '@angular/common/http';

//Service

var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, loginService, router) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
        this.loginUserData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.siteUrl = localStorage.getItem('baseUrl');
        //alert(this.siteUrl);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        this.loginService.init(this.siteUrl);
        this.loginService.login(this.f.username.value, this.f.password.value).subscribe(function (res) {
            if (_this.navUrl) {
                _this.router.navigate(['/' + _this.navUrl]);
            }
            else {
                _this.loginUserData.emit(res);
            }
        });
    };
    LoginComponent.prototype.getSocialSignInUserData = function (data) {
        console.log('getFBSignInUserData - ', data);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoginComponent.prototype, "sociallogin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoginComponent.prototype, "facebook", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoginComponent.prototype, "google", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LoginComponent.prototype, "navUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "loginUserData", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joomla-login',
            template: __webpack_require__(/*! ./login.component.html */ "../projects/user-login/src/lib/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "../projects/user-login/src/lib/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _providers_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../projects/user-login/src/lib/components/sociallogin/sociallogin.component.html":
/*!****************************************************************************************!*\
  !*** ../projects/user-login/src/lib/components/sociallogin/sociallogin.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <button mdbBtn [hidden]=\"!facebook\" color=\"primary\" class=\"mb-3 fb-color\" block=\"true\" (click)=\"signInWithFB()\">\n    <span class=\"fa fa-google text-capitalize\"> Sign in with facebook</span>\n  </button>\n  <button mdbBtn [hidden]=\"!google\" color=\"danger\" class=\"mb-3 google-color\" block=\"true\" (click)=\"signInWithGoogle()\">\n    <span class=\"fa fa-google text-capitalize\"> Sign in with Google</span>\n\n  </button>\n  <button mdbBtn color=\"info\" block=\"true\" class=\"mb-3 logout\" (click)=\"signOut()\">\n    <span class=\"fa fa-google text-capitalize\"> Logout</span>\n  </button>\n</div>"

/***/ }),

/***/ "../projects/user-login/src/lib/components/sociallogin/sociallogin.component.scss":
/*!****************************************************************************************!*\
  !*** ../projects/user-login/src/lib/components/sociallogin/sociallogin.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%; }\n\n.container {\n  padding: 16px; }\n\n.google-color {\n  background-color: #c71610; }\n\n.fb-color {\n  background-color: #3b5998; }\n\nbutton:hover {\n  opacity: 0.8; }\n\n.logout {\n  background-color: #2C76B3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90dHBsbHQyOC9Eb2N1bWVudHMvaHRkb2MvbXktbnBtLXBrZy9uZ3Rlay11c2VyLWxvZ2luL3Byb2plY3RzL3VzZXItbG9naW4vc3JjL2xpYi9jb21wb25lbnRzL3NvY2lhbGxvZ2luL3NvY2lhbGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvbGliL2NvbXBvbmVudHMvc29jaWFsbG9naW4vc29jaWFsbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5nb29nbGUtY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNzE2MTA7XG4gIH1cblxuICAuZmItY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gIH1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cblxuICAubG9nb3V0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzc2QjM7XG5cbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "../projects/user-login/src/lib/components/sociallogin/sociallogin.component.ts":
/*!**************************************************************************************!*\
  !*** ../projects/user-login/src/lib/components/sociallogin/sociallogin.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SocialloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialloginComponent", function() { return SocialloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../projects/user-login/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "../projects/user-login/node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _providers_sociallogin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/sociallogin.service */ "../projects/user-login/src/lib/providers/sociallogin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");






var SocialloginComponent = /** @class */ (function () {
    function SocialloginComponent(authService, socialloginService, router) {
        this.authService = authService;
        this.socialloginService = socialloginService;
        this.router = router;
        this.loginUserData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.siteUrl = localStorage.getItem('baseUrl');
        //alert(this.siteUrl);
    }
    SocialloginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socialloginService.init(this.siteUrl);
        this.authService.authState.subscribe(function (user) {
            _this.loggedIn = (user != null);
        });
    };
    SocialloginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID).then(function (res) {
            _this.socialloginService.doSocialLogin(res.authToken, res.provider).then(function (res) {
                if (_this.navUrl) {
                    _this.router.navigate(['/' + _this.navUrl]);
                }
                else {
                    _this.loginUserData.emit(res);
                }
            });
        });
    };
    SocialloginComponent.prototype.signInWithFB = function () {
        var _this = this;
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID).then(function (res) {
            _this.socialloginService.doSocialLogin(res.authToken, res.provider).then(function (res) {
                _this.loginUserData.emit(res);
            });
        });
    };
    SocialloginComponent.prototype.signOut = function () {
        this.socialloginService.logout();
        this.authService.signOut().then(function (res) {
            alert('Successfully signOut');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SocialloginComponent.prototype, "facebook", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SocialloginComponent.prototype, "google", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SocialloginComponent.prototype, "navUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SocialloginComponent.prototype, "loginUserData", void 0);
    SocialloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joomla-sociallogin',
            template: __webpack_require__(/*! ./sociallogin.component.html */ "../projects/user-login/src/lib/components/sociallogin/sociallogin.component.html"),
            styles: [__webpack_require__(/*! ./sociallogin.component.scss */ "../projects/user-login/src/lib/components/sociallogin/sociallogin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _providers_sociallogin_service__WEBPACK_IMPORTED_MODULE_3__["SocialloginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SocialloginComponent);
    return SocialloginComponent;
}());



/***/ }),

/***/ "../projects/user-login/src/lib/providers/login.service.ts":
/*!*****************************************************************!*\
  !*** ../projects/user-login/src/lib/providers/login.service.ts ***!
  \*****************************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../projects/user-login/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");







var LoginService = /** @class */ (function () {
    function LoginService(http, router, zone) {
        this.http = http;
        this.router = router;
        this.zone = zone;
        this.loginApi = '/index.php?option=com_api&app=users&resource=login';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'X-Auth': 'login' });
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    LoginService.prototype.init = function (siteUrl) {
        this.baseUrl = siteUrl;
        return this;
    };
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        return this.http.post(this.baseUrl + this.loginApi, formData, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (!user['err_code'] && (user['data'].auth || user['data'].id)) {
                localStorage.setItem('currentUser', JSON.stringify(user['data']));
                _this.currentUserSubject.next(user['data']);
            }
            return user['data'];
        }));
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.zone.run(function () {
            _this.router.navigate(['/login']);
        });
    };
    LoginService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    LoginService.prototype.isLoggedIn = function () {
        var user = this.getCurrentUser();
        return user.auth ? true : false;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../projects/user-login/src/lib/providers/sociallogin.service.ts":
/*!***********************************************************************!*\
  !*** ../projects/user-login/src/lib/providers/sociallogin.service.ts ***!
  \***********************************************************************/
/*! exports provided: SocialloginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialloginService", function() { return SocialloginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../projects/user-login/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");






var SocialloginService = /** @class */ (function () {
    function SocialloginService(http, router, zone) {
        this.http = http;
        this.router = router;
        this.zone = zone;
        this.socialloginApi = '/index.php?option=com_api&app=users&resource=jfbconnect';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    SocialloginService.prototype.init = function (siteUrl) {
        this.baseUrl = siteUrl;
        return this;
    };
    SocialloginService.prototype.logout = function () {
        var _this = this;
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.zone.run(function () {
            _this.router.navigate(['/login']);
        });
    };
    SocialloginService.prototype.doSocialLogin = function (accessToken, provider) {
        var _this = this;
        var payloaddata = '&access_token=' + accessToken + '&provider=' + provider;
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('Access-Control-Allow-Origin', '*');
        var userData = {
            'access_token': accessToken,
            'provider': provider
        };
        return new Promise(function (resolve) {
            _this.http.post(_this.baseUrl + _this.socialloginApi, userData, { headers: _this.headers })
                .subscribe(function (res) {
                localStorage.setItem('currentUser', JSON.stringify(res['data']));
                _this.currentUserSubject.next(res['data']);
                resolve(res);
                alert(' Login Successfully');
            });
        });
    };
    SocialloginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SocialloginService);
    return SocialloginService;
}());



/***/ }),

/***/ "../projects/user-login/src/lib/user-login-routing.module.ts":
/*!*******************************************************************!*\
  !*** ../projects/user-login/src/lib/user-login-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../projects/user-login/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");



var userRoutes = [];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(userRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "../projects/user-login/src/lib/user-login.component.html":
/*!****************************************************************!*\
  !*** ../projects/user-login/src/lib/user-login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"isUserLoggedIn\">\n    <app-joomla-login [hidden]=\"!manualLogin\"  (loginUserData)=\"getLoginUserData($event)\"></app-joomla-login>\n    <app-joomla-sociallogin  [hidden]=\"!userLogin\" [facebook]=\"facebook\" [google]=\"google\"  (loginUserData)=\"getLoginUserData($event)\">\n    </app-joomla-sociallogin>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../projects/user-login/src/lib/user-login.component.ts":
/*!**************************************************************!*\
  !*** ../projects/user-login/src/lib/user-login.component.ts ***!
  \**************************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../projects/user-login/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent() {
        this.isUserLoggedIn = false;
        this.signInUserData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        console.log(this.navUrl);
        if (this.userLogin) {
            this.facebook = this.userLogin.includes("facebook"); // true
            this.google = this.userLogin.includes("google"); // true
            this.manualLogin = this.userLogin.includes("manual-login"); // true
        }
        else {
            this.manualLogin = true;
        }
    };
    UserLoginComponent.prototype.getLoginUserData = function (data) {
        //this.isUserLoggedIn = true;
        this.signInUserData.emit(data);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserLoginComponent.prototype, "navUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserLoginComponent.prototype, "userLogin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserLoginComponent.prototype, "signInUserData", void 0);
    UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngtek-joomla-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "../projects/user-login/src/lib/user-login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "../projects/user-login/src/lib/user-login.module.ts":
/*!***********************************************************!*\
  !*** ../projects/user-login/src/lib/user-login.module.ts ***!
  \***********************************************************/
/*! exports provided: UserLoginModule, UserLoginModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginModule", function() { return UserLoginModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginModules", function() { return UserLoginModules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../projects/user-login/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-login.component */ "../projects/user-login/src/lib/user-login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-login-routing.module */ "../projects/user-login/src/lib/user-login-routing.module.ts");
/* harmony import */ var _components_sociallogin_sociallogin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sociallogin/sociallogin.component */ "../projects/user-login/src/lib/components/sociallogin/sociallogin.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "../projects/user-login/src/lib/components/login/login.component.ts");
/* harmony import */ var _providers_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./providers/login.service */ "../projects/user-login/src/lib/providers/login.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularx-social-login */ "../projects/user-login/node_modules/angularx-social-login/angularx-social-login.es5.js");







//Componenets


//Providers

//Social login third party module

//import { MDBBootstrapModule } from 'angular-bootstrap-md';
var userRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'sociallogin', component: _components_sociallogin_sociallogin_component__WEBPACK_IMPORTED_MODULE_7__["SocialloginComponent"] },
];
var googleClientId;
var fbAppId;
var configsocial;
var ContentFulData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("ComponenetsInterface");
var UserLoginModule = /** @class */ (function () {
    function UserLoginModule() {
    }
    UserLoginModule_1 = UserLoginModule;
    UserLoginModule.forRoot = function (config) {
        console.log(config);
        googleClientId = config.googleClientId;
        localStorage.setItem('fbAppId', fbAppId);
        localStorage.setItem('googleClientId', googleClientId);
        localStorage.setItem('baseUrl', config.baseUrl);
        fbAppId = config.fbAppId;
        return {
            ngModule: UserLoginModule_1,
            providers: [
                {
                    provide: ContentFulData,
                    useValue: config
                }
            ]
        };
    };
    var UserLoginModule_1;
    UserLoginModule = UserLoginModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _user_login_component__WEBPACK_IMPORTED_MODULE_2__["UserLoginComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_sociallogin_sociallogin_component__WEBPACK_IMPORTED_MODULE_7__["SocialloginComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["SocialLoginModule"],
                // MDBBootstrapModule.forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(userRoutes),
                _user_login_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRoutingModule"]
            ],
            exports: [
                _user_login_component__WEBPACK_IMPORTED_MODULE_2__["UserLoginComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_sociallogin_sociallogin_component__WEBPACK_IMPORTED_MODULE_7__["SocialloginComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            providers: [
                _providers_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"],
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ]
        })
    ], UserLoginModule);
    return UserLoginModule;
}());

configsocial = new angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["GoogleLoginProvider"](localStorage.getItem('googleClientId'))
    },
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["FacebookLoginProvider"](localStorage.getItem('fbAppId'))
    }
]);
function provideConfig() {
    return configsocial;
}
var UserLoginModules = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserLoginModules, _super);
    function UserLoginModules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserLoginModules = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ]
        })
    ], UserLoginModules);
    return UserLoginModules;
}(UserLoginModule));



/***/ }),

/***/ "../src/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ../src/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../src/app/app-routing.module.ts":
/*!****************************************!*\
  !*** ../src/app/app-routing.module.ts ***!
  \****************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../src/app/app.component.html":
/*!*************************************!*\
  !*** ../src/app/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngtek-joomla-login [navUrl]=\"navUrl\" [userLogin]=\"userLogin\" (signInUserData)=\"SignInUserData($event)\"\n></ngtek-joomla-login>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../src/app/app.component.scss":
/*!*************************************!*\
  !*** ../src/app/app.component.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "../src/app/app.component.ts":
/*!***********************************!*\
  !*** ../src/app/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngtek-user-login';
        this.userLogin = ['facebook', 'manual-login', 'google'];
        this.navUrl = "sociallogin";
    }
    AppComponent.prototype.SignInUserData = function (data) {
        alert(' Login event getting');
        console.log('getFBSignInUserData - ', data);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "../src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "../src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../src/app/app.module.ts":
/*!********************************!*\
  !*** ../src/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "../src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "../src/app/app.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "../node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _ngtek_user_login_projects_user_login_src_lib_user_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ngtek-user-login/projects/user-login/src/lib/user-login.module */ "../projects/user-login/src/lib/user-login.module.ts");






//import { UserLoginModule } from 'user-login';

var ComponenetsInterface = {
    googleClientId: '1005635293950-29g89s87fm0dvj3540rsufta0oguts1l.apps.googleusercontent.com',
    fbAppId: '2037079629930934',
    baseUrl: 'https://smart-citizen.tekdi.net'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ngtek_user_login_projects_user_login_src_lib_user_login_module__WEBPACK_IMPORTED_MODULE_6__["UserLoginModule"].forRoot(ComponenetsInterface),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot()
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../src/environments/environment.ts":
/*!******************************************!*\
  !*** ../src/environments/environment.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "../src/main.ts":
/*!**********************!*\
  !*** ../src/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "../src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "../src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ../src/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ttpllt28/Documents/htdoc/my-npm-pkg/ngtek-user-login/src/main.ts */"../src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map