import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ad-view-all-users',
  templateUrl: './ad-view-all-users.component.html',
  styleUrls: ['./ad-view-all-users.component.css'],
  standalone:false
})
export class AdViewAllUsersComponent implements OnInit {
  users: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.viewAllUsers().subscribe((data) => {
      this.users = data.users;
      console.log(this.users);
    });
  }

  deleteUser(username: string): void {
    this.adminService.deleteUserByUsername(username).subscribe(() => {
      alert('User deleted successfully!');
      this.users = this.users.filter(user => user.username !== username); // Update the users list
    }, error => {
      console.error('Error deleting user', error);
    });
  }
}
