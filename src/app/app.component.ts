import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service'; 
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Open-blog';
  lien:string;
  userName:string;
  isAuth: boolean;

  constructor(public authService: AuthService){
    var firebaseConfig = {
      apiKey: "AIzaSyDZmDV0RYP-1xzCk-G3Z9fdN5zcMPTgqUc",
      authDomain: "open-blog-e1ec9.firebaseapp.com",
      databaseURL: "https://open-blog-e1ec9.firebaseio.com",
      projectId: "open-blog-e1ec9",
      storageBucket: "",
      messagingSenderId: "22203575438",
      appId: "1:22203575438:web:384a4e3a4edf6474032ddf",
      measurementId: "G-7CTB6N18KK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
          this.authService.getUserName();
        }else{
          this.isAuth = false;
        }
      }
    );
    this.userName= this.authService.getUserName();
  }

  onSignOutUser(){
    this.authService.signOutUser();
    this.authService.isAuth=false;
  }
}
