import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Post } from '../post';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  posts: Post[] = new Array();
  postSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) { }

  emitPosts(){
    this.postSubject.next(this.posts);
  }

  savePosts(){
    firebase.database().ref('/post')
      .set(this.posts);
  }

  getPosts(){
    firebase.database().ref('/post')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }  

  getSinglePost(id: number){
    return new Promise(
      (resolve, reject) => {
        //l'adresse des posts dans la database
        firebase.database().ref('/post/'+id).once('value').then(
          (data) => {
            resolve(data.val());
          },(error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewPost(newPost: Post){
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post : Post){
    const postIndex = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndex, 1);
    this.savePosts();
    this.emitPosts();
  }
}



