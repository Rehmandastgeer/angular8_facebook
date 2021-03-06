import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../../ApiServices/auth/service';
import  decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(public auth:AuthService, public router:Router) { }
  
  canActivate(route:ActivatedRouteSnapshot):boolean{
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
  
    if(!this.auth.isAuthenticated() || tokenPayload.role !==expectedRole){
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
