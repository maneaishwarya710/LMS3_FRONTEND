import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-remove-user',
  standalone: false,
  templateUrl: './add-remove-user.component.html',
  styleUrl: './add-remove-user.component.css'
})
export class AddRemoveUserComponent {
  userId: number=0;

  constructor(private adminService: AdminService) {}

  deleteUser(): void {
    this.adminService.deleteUserById(this.userId).subscribe(() => {
      alert('User deleted successfully!');
    });
  }

}
