import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../user/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.loginService.getUser();
    const decodedUser=decodeURIComponent(user);
    console.log(`decoded user: ${decodedUser}`);
    
    console.log(`User passing route guard is:${user}`);
    if (user && user.userType === 'admin') {
      return true;
    } else {
      alert("Only admin have access to this module!")
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
