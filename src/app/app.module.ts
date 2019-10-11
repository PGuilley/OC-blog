import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { NouveauPostComponent } from './post/nouveau-post/nouveau-post.component';
import { NewUserComponent } from './authentification/new-user/new-user.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthService } from './service/auth.service';
import { PostService } from './service/post.service';
import { AuthGuardService } from './service/auth-guard.service';
import { DatePipe } from '../../node_modules/@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NouveauPostComponent,
    PostDetailComponent,
    AuthentificationComponent,
    NewUserComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    PostService,
    AuthGuardService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

