import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClientModule, private regService:RegisterService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  userInfo:any;

  onSubmit(): void {
    this.regService.getRegisterMessage(this.registerForm.value).subscribe((data)=>{
      console.log(data);
      alert("User Registration Successful!");
    })
  }
}
