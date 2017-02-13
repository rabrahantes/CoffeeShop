import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig ={
  apiKey: "AIzaSyCqsGqUQTUzDjRORXQ8V118B9NdJC27KLc",
  authDomain: "af2-lists-4dafa.firebaseapp.com",
  databaseURL: "https://af2-lists-4dafa.firebaseio.com",
  storageBucket: "af2-lists-4dafa.appspot.com",
  messagingSenderId: "617768797374"
};

const myFirebaseAuthConfig={
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
