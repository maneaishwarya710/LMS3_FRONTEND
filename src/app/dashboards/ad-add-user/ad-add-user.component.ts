import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-add-user',
  standalone: false,
  templateUrl: './ad-add-user.component.html',
  styleUrl: './ad-add-user.component.css'
})
export class AdAddUserComponent {
  addUserForm!: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminService) {}
  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  onSubmit(): void {
    this.adminService.addUser(this.addUserForm.value).subscribe((data) => {
      alert('User added successfully!');
      this.addUserForm.reset();
    });
  }

}


