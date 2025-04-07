import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginForm!: FormGroup;
  label = 'Login';

  constructor(private fb: FormBuilder, private http: HttpClientModule, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  userInfo: any;

  onSubmit(): void {
    this.loginService.getLoginMessage(this.LoginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        this.loginService.setToken(res.token);
        this.loginService.setUser(res.user);
        localStorage.setItem('userType', res.user.userType);
        alert('Login Successful!');
        this.LoginForm.reset();
        this.router.navigate(['/homepage']);
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Invalid username or password. Please try again.');
      }
    );
  }

}
