import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../service/post.service';
import { AuthService } from '../service/auth.service';
import { Subscription } from '../../../node_modules/rxjs';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscription: Subscription;
  authStatus: boolean; 
  nom: string ='';

  constructor(private postService: PostService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.nom = this.authService.getUserName();
    this.postService.getPosts();
    this.postService.emitPosts();
    this.authStatus = this.authService.isAuth;
    if (!this.authStatus){    
    }
  }

  onDeletePost(post: Post){
    this.postService.removePost(post);
  }

  onViewPost(id: number) {
    this.router.navigate(['/detail',id]);
  }

  onAime(unpost: Post): number{
    return unpost.loveIts++;
  }

  onAimePas(unpost: Post): number{
    return unpost.loveIts--;
  }

  getColor(unpost: Post) {
    if(unpost.loveIts >0) {
      return 'green';
    } else if(unpost.loveIts <0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  getBackgroundColor(unpost: Post) {
    if(unpost.loveIts >0) {
      return 'lightgreen';
    } else if(unpost.loveIts <0) {
      return '#FFC4C4';
    } else {
      return 'white';
    }
  }

  getClass(unpost: Post){
    if(unpost.loveIts >0) {
      return 'list-group-item list-group-item-success';
    } else if(unpost.loveIts <0) {
      return 'list-group-item list-group-item-danger';
    } else {
      return 'list-group-item';
    }
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }
}
  

/**tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    tap(newHero: Hero) {
     return this.log(`added hero w/ id=${newHero.id}`)
    }**/
