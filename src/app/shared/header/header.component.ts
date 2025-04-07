import { Component } from '@angular/core';
import { LoginService } from '../../user/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: any = null;
  userType: string | null = null;
  constructor(private loginService:LoginService, private router:Router){}
  ngOnInit(): void {
    this.loginService.user$.subscribe(user => {
      this.user = user;
    });
    this.loginService.userType$.subscribe(userType => {
      this.userType = userType;
    });
  }

  logout(): void {
    this.loginService.logout();
    alert('You have been logged out.');
    this.router.navigate(['/user/login']);
  }

}
