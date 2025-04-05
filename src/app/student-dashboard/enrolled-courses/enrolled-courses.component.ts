import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { LoginService } from '../../user/login.service';

@Component({
  selector: 'app-enrolled-courses',
  standalone: false,
  templateUrl: './enrolled-courses.component.html',
  styleUrl: './enrolled-courses.component.css'
})
export class EnrolledCoursesComponent {
  userId!: number;
  user!:any;
  enrolledCourses: any[] = [];

  constructor(private studentService: StudentService, private loginService:LoginService) {
    this.user=loginService.getUser();
    this.userId=this.user.userId;
  }

  getEnrolledCourses(): void {
    this.studentService.getEnrolledCourses(this.userId).subscribe(
      response => {
        this.enrolledCourses = response.enrolledCourses;
        console.log('Enrolled courses:', this.enrolledCourses);
      },
      error => {
        console.error('Error fetching enrolled courses', error);
      }
    );
  }
}


