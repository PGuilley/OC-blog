import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { FormBuilder, Validators, FormGroup } from '../../../../node_modules/@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';
import { Post } from '../../post';
import { AuthService } from '../../service/auth.service';
import { Timestamp } from '../../../../node_modules/rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nouveau-post',
  templateUrl: './nouveau-post.component.html',
  styleUrls: ['./nouveau-post.component.css']
})
export class NouveauPostComponent implements OnInit {

  newPostForm : FormGroup

  constructor(private postService: PostService,
              private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private datePipe: DatePipe
              ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.newPostForm = this.formBuilder.group({
      titre: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost(){
    const titre = this.newPostForm.get('titre').value;
    const contenu = this.newPostForm.get('content').value;
    const currentDate = new Date();
    const transCurrentDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    const newPost = new Post(titre, contenu, this.authService.getUserName(), 0, transCurrentDate);
    this.postService.createNewPost(newPost);
    this.router.navigate(['/post']);
  }
}
