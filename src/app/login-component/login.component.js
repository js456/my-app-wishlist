/**
 * Created by Jitendra on 7/20/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var user_register_service_1 = require('../user.register.service');
var login_1 = require("./login");
var LoginComponent = (function () {
    function LoginComponent(registerService) {
        this.registerService = registerService;
        this.model = new login_1.UserLogin();
        this.close = new core_1.EventEmitter();
        this.submitted = false;
        // TODO: Remove this when we're done
        /*get diagnostic() {
         return JSON.stringify(this.model);
         }*/
    }
    LoginComponent.prototype.onSubmit = function () { this.submitted = true; };
    __decorate([
        core_1.Input()
    ], LoginComponent.prototype, "userRegister");
    __decorate([
        core_1.Output()
    ], LoginComponent.prototype, "close");
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: '../../app/login-component/login.component.html',
            styleUrls: ['app/css/form.css'],
            providers: [user_register_service_1.UserRegisterService]
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map