import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ad-view-all-users',
  standalone: false,
  templateUrl: './ad-view-all-users.component.html',
  styleUrl: './ad-view-all-users.component.css'
})
export class AdViewAllUsersComponent implements OnInit{
  users: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.viewAllUsers().subscribe((data) => {
      this.users = data.users;
    });
  }

}
