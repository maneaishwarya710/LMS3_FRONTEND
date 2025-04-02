import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone:false
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private regService: RegisterService, private router:Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['', [Validators.required]] // Default value set to 'student'
    });
  }

  onSubmit(): void {
    this.regService.getRegisterMessage(this.registerForm.value).subscribe((data) => {
      console.log(data);
      alert("User Registration Successful!");
      this.registerForm.reset();
      this.router.navigate(['/user/login']);
    });
  }
}
