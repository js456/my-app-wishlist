/**
 * Created by Jitendra on 7/20/2016.
 */

import { Component,Input,Output,EventEmitter } from '@angular/core';
import {UserRegisterService} from './user.register.service';
import {UserRegister} from "./register";


@Component({

  selector: 'app-register',
  templateUrl: 'app/register.component.html',
  styleUrls: ['app/register.component.css']
})
export class RegisterComponent{


  @Input()userRegister:UserRegister;
  @Output() close = new EventEmitter();
  constructor(private registerService :UserRegisterService ){

  }
}
