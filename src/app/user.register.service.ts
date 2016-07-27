/**
 * Created by Jitendra on 7/24/2016.
 */

import {Injectable} from '@angular/core';
import {Headers,Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {UserRegister} from "./register";

@Injectable()
export class UserRegisterService{

  private registerUrl='app/register';

  constructor(private http:Http){ }

  // New User register service
  private post(userRegister:UserRegister):Promise<UserRegister>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.registerUrl,JSON.stringify(userRegister),{headers:headers})
      .toPromise()
      .then(res=>res.json().data)
      .catch(this.handleError);
  }
  // Update Existing User
  private put(userRegister:UserRegister){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url='${this.registerUrl}/${hero/id}';

    return this.http.put(url, JSON.stringify(userRegister), {headers: headers})
      .toPromise()
      .then(()=>userRegister)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
