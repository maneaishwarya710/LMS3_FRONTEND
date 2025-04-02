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
  enrolledCourses: any[] = [];
  user: any = null;
  userId!: number;

  constructor(private studentService: StudentService, private loginService: LoginService) {}

  ngOnInit(): void {
    console.log("Get enrolled method!")
    this.loginService.user$.subscribe(user => {
      this.user = user;
      if (this.user) {
        this.userId = this.user.userId;
        console.log(`Enrolled courses for user with userId: ${this.userId}`);

        this.studentService.getEnrolledCourses(this.userId).subscribe(
          (courses) => {
            this.enrolledCourses = courses;
          },
          (error) => {
            console.error('Error fetching enrolled courses', error);
            alert('Unable to fetch enrolled courses!');
          }
        );

      }
    });
  }
}


