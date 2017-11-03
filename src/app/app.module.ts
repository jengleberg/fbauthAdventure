import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';

export const firebaseConfig = {
	apiKey: "AIzaSyCA2iQ0nakDK1rQGRYkOzKqgoaTLMXdg-U",
    authDomain: "ngfbauth-817fa.firebaseapp.com",
    databaseURL: "https://ngfbauth-817fa.firebaseio.com",
    projectId: "ngfbauth-817fa",
    storageBucket: "ngfbauth-817fa.appspot.com",
    messagingSenderId: "134288398766"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
