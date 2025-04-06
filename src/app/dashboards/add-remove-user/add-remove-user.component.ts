import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-remove-user',
  templateUrl: './add-remove-user.component.html',
  styleUrls: ['./add-remove-user.component.css'],
  standalone:false
})
export class AddRemoveUserComponent {
  username: string = '';

  constructor(private adminService: AdminService) {}

  deleteUser(): void {
    this.adminService.deleteUserByUsername(this.username).subscribe(() => {
      alert('User deleted successfully!');
    }, error => {
      console.error('Error deleting user', error);
    });
  }
}
