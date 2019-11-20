import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../ApiServices/user/service';
import { Login } from 'src/app/models/Login/login';
import { Store } from '@ngrx/store';
import UserState from 'src/app/State/auth.state';
import { login } from 'src/app/Actions/auth.action';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  getuser;
  ulogin;
  constructor(public router: Router, public userservice: UserService, public login: Login,
    private store:Store<UserState>) { }

  ngOnInit() {
  }

  Signup() {
    this.router.navigate(['signup']);
  }

  Login() {
    this.userservice.userlogin(this.login).subscribe((res) => {
      this.getuser = res;
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['dashboard']);
      console.log('user login', this.getuser);
      this.ulogin = this.store.dispatch(login(res));
      console.log('usuyv',this.ulogin);
    });

  }
}
