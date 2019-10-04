import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { POSTS } from '../mock-post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts = POSTS;
  selectedPost: Post;
  constructor() { }

  ngOnInit() {
  }

  onAime(post: Post): number{
    return post.loveIts++;
  }

  onAimePas(post: Post): number{
    return post.loveIts--;
  }

  getColor(post: Post) {
    if(post.loveIts >0) {
      return 'green';
    } else if(post.loveIts <0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  getBackgroundColor(post: Post) {
    if(post.loveIts >0) {
      return 'lightgreen';
    } else if(post.loveIts <0) {
      return '#FFC4C4';
    } else {
      return 'white';
    }
  }

  getClass(post: Post){
    if(post.loveIts >0) {
      return 'list-group-item list-group-item-success';
    } else if(post.loveIts <0) {
      return 'list-group-item list-group-item-danger';
    } else {
      return 'list-group-item';
    }
  }
}

/**tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    tap(newHero: Hero) {
     return this.log(`added hero w/ id=${newHero.id}`)
    }**/
