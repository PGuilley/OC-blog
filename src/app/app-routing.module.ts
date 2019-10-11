import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './post/post.component';
import { NouveauPostComponent } from './post/nouveau-post/nouveau-post.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NewUserComponent } from './authentification/new-user/new-user.component';
import { AuthGuardService } from './service/auth-guard.service';
import { PostDetailComponent } from './post/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  { path: 'post', component:PostComponent },
  { path: 'nouveau-post', canActivate:[AuthGuardService], component: NouveauPostComponent},
  { path: 'authentification', component: AuthentificationComponent},
  { path: 'new-user', component: NewUserComponent},
  { path: 'detail/:id', component: PostDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}