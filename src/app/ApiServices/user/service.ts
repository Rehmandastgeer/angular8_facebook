import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user';
import { Login } from 'src/app/models/Login/login';
import {Store} from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient, public login: Login, public user: User,private store:Store<any>) { }
  createuser(): Observable<any> {
    const url = 'http://localhost:3000/api/users';
    return this.http.post(url, {});
  }
  userlogin(login): Observable<any> {
    const url = 'http://localhost:3000/api/login';
    return this.http.post(url, this.login);
  }
  userSignup(user) {
    const url = 'http://localhost:3000/api/users';
    return this.http.post(url, this.user);
  }
  getPost(userId): Observable<any> {
    const url = `http://localhost:3000/api/users/${userId}/posts`;
    return this.http.get(url);
  }
}
