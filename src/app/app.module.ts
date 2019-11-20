import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { UserloginComponent } from './components/auth/login/userlogin.component';
import { PostsComponent } from './components/post/list/posts.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatepostComponent } from './components/post/form/createpost.component';
import { CommentListingComponent } from './components/comment/list/comment-listing.component';
import { User } from './models/user/user';
import { Login } from './models/Login/login';
import { Comment } from './models/comment/comment';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewCommentComponent } from './components/comment/view/view-comment/view-comment.component';
import { FormComponent } from './components/comment/form/form.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { CommentReducer } from './Reducer/comment.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthReducer } from './Reducer/auth.reducer';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    PostsComponent,
    SignupComponent,
    CreatepostComponent,
    CommentListingComponent,
    DashboardComponent,
    ViewCommentComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    StoreModule.forRoot(CommentReducer, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreModule.forRoot({ comments: CommentReducer }),

    StoreModule.forRoot({ 
      auth: AuthReducer,
      comments: CommentReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [User, Login, Comment],
  bootstrap: [AppComponent]
})
export class AppModule { }
