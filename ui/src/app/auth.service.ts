import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) { }

  access_token: string;
  id_token: string;
  expires_at: string;

  auth0 = new auth0.WebAuth({
    clientID: environment.clientId,
    domain: environment.domain,
    responseType: 'token id_token',
    audience: environment.audience,
    redirectUri: environment.callback,
    scope: 'openid'
  });
}
