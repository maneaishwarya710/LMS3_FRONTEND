import { Component } from '@angular/core';
import { TutorService } from '../../services/tutor.service';
import { LoginService } from '../../user/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-my-created-courses',
  standalone: false,
  templateUrl: './get-my-created-courses.component.html',
  styleUrl: './get-my-created-courses.component.css'
})
export class GetMyCreatedCoursesComponent {
  courses: any[] = [];
  userId!: number;

  courseId!:any;

  constructor(private tutorService: TutorService, private loginService: LoginService, private router:Router) {
    const user = this.loginService.getUser();
    this.userId = user.userId;
  }

  ngOnInit(): void {
    this.tutorService.getCoursesByCreatorId(this.userId).subscribe(
      response => {
        this.courses = response;
      },
      error => {
        console.error('Error retrieving courses', error);
      }
    );
  }

  navigateToAddCourseContent(courseId:number): void {
    this.router.navigate(['/tutor-dashboard/course-content', courseId]);
  }

  navigateToCreateQuiz(courseId:number): void {
    this.router.navigate(['/tutor-dashboard/create-quiz', courseId]);
  }

  removeCourse(courseId:number): void {
    // const courseId = this.removeCourseForm.value.courseId;
    this.tutorService.removeCourseById(courseId).subscribe(
      response => {
        console.log('Course removed successfully', response);
        alert("course removed successfully!");
        this.router.navigate(['/tutor-dashboard/tutors-dashboard']);
      },
      (error: any) => {
        console.error('Error removing course', error);
      }
    );
    
  }

  navigateToCourseContents(courseId: number): void {
    this.router.navigate(['/tutor-dashboard/get-content-by-course-id', courseId]);
  }
}


