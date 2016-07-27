/**
 * Created by Jitendra on 7/26/2016.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class Logger{
  logger:string[]=[];

  log(message:string)
  {
    this.logger.push(message);
    console.log(message);
  }
}
