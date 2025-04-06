import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../user/login.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("Student Route...")
    const user = this.loginService.getUser();
    const roles: string[] = ['admin','tutor', 'student'];
    if (user && roles.includes(user.userType)) {
      return true;
    } else {
      alert("You need to be logged in to view the student dashboard. Please log in or sign up to continue!")
      this.router.navigate(['/homepage']);
      return false;
    }
  }
}
