import { Injectable } from '@angular/core';
import { User } from '../user';
import * as firebase from 'firebase';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth:boolean = false;
  user: User;
  userSubject = new Subject<User>();
 

  constructor() { }

  signIn(){
    this.isAuth = true;
  }

  signOut():void{
    this.isAuth = false;
  }

  getAuthStatus(): boolean{
    return this.isAuth;
  }

  createNewUser(email: string, password:string){
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
            this.isAuth=true;
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password:string){
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
            this.isAuth=true;
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
    this.isAuth=false;
  }

  getUserName(): string{
    var nameUser:string ='';
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var email = user.email;
        var nameUser = email.substr(0, email.indexOf("@"));
      } else {
        nameUser='inconnu';
      }
      return nameUser;
    });
    return nameUser;
  }

  getCurrentUser(){
    return firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.actualUser = user;
      } else {
      }
    });
  }
}
