/**
 * Created by Jitendra on 7/24/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var UserRegisterService = (function () {
    function UserRegisterService(http) {
        this.http = http;
        this.registerUrl = 'app/register';
    }
    // New User register service
    UserRegisterService.prototype.post = function (userRegister) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.registerUrl, JSON.stringify(userRegister), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update Existing User
    UserRegisterService.prototype.put = function (userRegister) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = '${this.registerUrl}/${hero/id}';
        return this.http.put(url, JSON.stringify(userRegister), { headers: headers })
            .toPromise()
            .then(function () { return userRegister; })
            .catch(this.handleError);
    };
    UserRegisterService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    UserRegisterService = __decorate([
        core_1.Injectable()
    ], UserRegisterService);
    return UserRegisterService;
}());
exports.UserRegisterService = UserRegisterService;
//# sourceMappingURL=user.register.service.js.map