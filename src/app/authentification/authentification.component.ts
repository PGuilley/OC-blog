import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  authStatus: boolean;
  trouve: boolean;
  userForm: FormGroup;
  errorMessage:string;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router : Router  ) { }

  ngOnInit(){
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit(){
    const email = this.userForm.get('email').value;
    const password = this.userForm.get('password').value;
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/post']);
      },
      (error) => {
        this.errorMessage = error;
      }
    )
  }

}
