import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginForm!: FormGroup;
  label='Login';

  constructor(private fb: FormBuilder, private http:HttpClientModule, private loginService:LoginService) {}

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  userInfo:any;

  onSubmit(): void {
    this.loginService.getLoginMessage(this.LoginForm.value).subscribe((res:any)=>{
      console.log(res);
      
      localStorage.setItem("token",res.token);
      console.log("Login Successful...");
      alert("Login Successful!");
    })
  }
}
