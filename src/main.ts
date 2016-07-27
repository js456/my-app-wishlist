import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';
bootstrap(AppComponent,[
  disableDeprecatedForms(), provideForms(),HTTP_PROVIDERS
])
  .catch((err:any)=>console.error(err));

if (environment.production) {
  enableProdMode();
}



