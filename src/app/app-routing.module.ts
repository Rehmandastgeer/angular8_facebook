import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './components/auth/login/userlogin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { PostsComponent } from './components/post/list/posts.component';
import { CreatepostComponent } from './components/post/form/createpost.component';
import { AuthGuard } from './guards/auth/service';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: UserloginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'post/create', component: CreatepostComponent },
  { path: 'dashboard', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
