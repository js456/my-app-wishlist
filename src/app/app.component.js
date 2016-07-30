"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var register_component_1 = require('./register.component');
var login_component_1 = require('../app/login-component/login.component');
/*//let $=jQuery*/
//declare var $:any
var AppComponent = (function () {
    function AppComponent(rootNode) {
        this.title = 'app works!';
        this.loginFlag = true;
        this.registerFlag = false;
        this.rootNode = rootNode;
    }
    AppComponent.prototype.registerToggle = function () {
        this.loginFlag = false;
        this.registerFlag = true;
    };
    AppComponent.prototype.loginToggle = function () {
        this.registerFlag = false;
        this.loginFlag = true;
    };
    AppComponent.prototype.ngOnInit = function () {
        /* $(this.rootNode.nativeElement).find('.register').hide();
         $(this.rootNode.nativeElement).find('.register').click(function () {
           $(this.rootNode.nativeElement).find('.login').hide();
           $(this.rootNode.nativeElement).find('.register').show();
     
         });
         $(this.rootNode.nativeElement).find('.login').click(function () {
           $(this.rootNode.nativeElement).find('.login').show();
           $(this.rootNode.nativeElement).find('.register').hide();
         })*/
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/css/form.css'],
            directives: [register_component_1.RegisterComponent, login_component_1.LoginComponent]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};*/
//# sourceMappingURL=app.component.js.map