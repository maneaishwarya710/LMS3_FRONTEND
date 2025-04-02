import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-ad-enrolls-list',
  standalone: false,
  templateUrl: './ad-enrolls-list.component.html',
  styleUrl: './ad-enrolls-list.component.css'
})
export class AdEnrollsListComponent implements OnInit{
  enrollments: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.enrollmentList().subscribe((data) => {
      this.enrollments = data.enrollments;
    });
  }

}
