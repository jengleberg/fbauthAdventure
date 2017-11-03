import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

export

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  loginWithGoogle() {
  	return this.afAuth.login({
  		providers: AuthProviders.Google,
  		method: AuthMethods.Popup
  	});
  }

  logout() {
  	return this.af.auth.logout();
  }

}
