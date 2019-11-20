import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user/user';

import { Router } from '@angular/router';
import { UserService } from 'src/app/ApiServices/user/service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  createusers;
  showmsg:boolean=false;
  constructor(public userservice: UserService,private user:User,public router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.userservice.userSignup(this.user).subscribe((res)=>{
      this.createusers= res; 
    }); 
    this.showmsg=true;
    this.user={
      user_name:null,
      dob:null,
      phone:null,
      email:null,
      password:null,
    }
  }
  back(){
    this.router.navigate(['']);
       
  }
}
