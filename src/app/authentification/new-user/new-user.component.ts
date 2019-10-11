import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router : Router  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      emailNewUser: ['', [Validators.required, Validators.email],],
      passwordNewUser: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      passwordVerifNewUser: ['', Validators.required],
    });
  }

  onSubmit(){
    const email = this.userForm.get('emailNewUser').value;
    const password = this.userForm.get('passwordNewUser').value;
    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/post']);
      }
    )
  }
}