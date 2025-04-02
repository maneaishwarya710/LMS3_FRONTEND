import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../user/login.service';

@Injectable({
  providedIn: 'root'
})
export class TutorGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.loginService.getUser();
    const roles: string[] = ['admin','tutor'];
    if (user && roles.includes(user.userType)) {
      return true;
    } else {
      alert("You don't have access to Tutor Dashboard!")
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
