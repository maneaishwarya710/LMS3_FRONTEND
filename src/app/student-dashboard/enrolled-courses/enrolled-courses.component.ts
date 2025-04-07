import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { LoginService } from '../../user/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css'],
  standalone:false
})
export class EnrolledCoursesComponent implements OnInit {
  userId!: number;
  user!: any;
  enrolledCourses: any[] = [];

  constructor(private studentService: StudentService, private router:Router, private loginService: LoginService) {
    this.user = loginService.getUser();
    this.userId = this.user.userId;
  }

  ngOnInit(): void {
    this.getEnrolledCourses();
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

  navigateToCourseContent(courseId: number): void {
    this.router.navigate(['/tutor-dashboard/get-content-by-course-id', courseId]);
  }

  navigateToQuiz(courseId: number): void {
    this.router.navigate(['/quiz/get-quiz-by-course-id', courseId]);
  }
}
