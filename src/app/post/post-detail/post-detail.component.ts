import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Post } from '../../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post : Post;

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.post = new Post('', '', '', 0, new Date());
    const id = this.route.snapshot.params['id'];
    this.postService.getSinglePost(+id).then(
      (post : Post) => {
      this.post = post;
      }
    );
  }

}
