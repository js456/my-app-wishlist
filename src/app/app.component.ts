import { Component, Input, ElementRef, OnInit} from '@angular/core';
import { RegisterComponent} from './register.component';
import {LoginComponent} from '../app/login-component/login.component';
import {CSSCarouselComponent} from './carousel.component';
/*//let $=jQuery*/
//declare var $:any
@Component({

  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/css/form.css'],
  directives:[RegisterComponent,LoginComponent,CSSCarouselComponent]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  rootNode:any;
  container:any;
  public loginFlag=true;
  public registerFlag=false;

  constructor(rootNode:ElementRef)
  {
    this.rootNode=rootNode;
  }

  registerToggle()
  {
      this.loginFlag=false;
      this.registerFlag=true;
      console.log("register toggle ");
      console.log(this.registerFlag);
  }
  loginToggle(){
    this.registerFlag=false;
    this.loginFlag=true;
    console.log("register toggle ");
    console.log("register toggle ");
    console.log("login flag");
    console.log(this.loginFlag);
    console.log("register flag");
    console.log(this.registerFlag);
  }
  ngOnInit(){
    this.loginFlag=true;
   /* $(this.rootNode.nativeElement).find('.register').hide();
    $(this.rootNode.nativeElement).find('.register').click(function () {
      $(this.rootNode.nativeElement).find('.login').hide();
      $(this.rootNode.nativeElement).find('.register').show();

    });
    $(this.rootNode.nativeElement).find('.login').click(function () {
      $(this.rootNode.nativeElement).find('.login').show();
      $(this.rootNode.nativeElement).find('.register').hide();
    })*/


  }
}
/*declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};*/
