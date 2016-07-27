import { Component, Input, ElementRef, OnInit} from '@angular/core';
import { RegisterComponent} from './register.component';
/*//let $=jQuery*/
//declare var $:any
@Component({

  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/css/common.css'],
  directives:[RegisterComponent]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  rootNode:any;
  container:any;
  constructor(rootNode:ElementRef)
  {
    this.rootNode=rootNode;
  }
  ngOnInit(){
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
