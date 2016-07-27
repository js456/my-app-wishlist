/**
 * Created by Jitendra on 7/20/2016.
 */

import { Component,Input,Output,EventEmitter } from '@angular/core';
import {UserRegisterService} from '../user.register.service';
import {UserLogin} from "./login"
import { NgForm }    from '@angular/forms';


@Component({

  selector: 'app-login',
  templateUrl: 'app/login.component.html',
  styleUrls: ['app/css/form.css'],
  providers: [UserRegisterService]

})
export class RegisterComponent{

  model=new UserLogin()
  //let register=new UserRegister();
  //console.log("User Register Object is "+register);
  @Input()userRegister:UserLogin;
  @Output() close = new EventEmitter();
  submitted = false;
  onSubmit() { this.submitted = true; }
  constructor(private registerService :UserRegisterService ){
// TODO: Remove this when we're done
    /*get diagnostic() {
     return JSON.stringify(this.model);
     }*/
  }
}
