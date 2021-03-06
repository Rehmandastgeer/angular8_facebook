import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AuthService } from '../../ApiServices/auth/service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(public authservice:AuthService,public router:Router) { }
  canActivate():boolean{
    if(!this.authservice.isAuthenticated()){
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
