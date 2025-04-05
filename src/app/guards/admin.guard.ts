import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../user/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("Admin Route...")
    const user = this.loginService.getUser();
    console.log(`User got in admin guard: ${user}`);
    if (user) {
      console.log(user.userType);
      if (user.userType === 'admin') {
        return true;
      }
    }
    alert("Only admin have access to this module!");
    this.router.navigate(['/homepage']);
    return false;
  }
}
