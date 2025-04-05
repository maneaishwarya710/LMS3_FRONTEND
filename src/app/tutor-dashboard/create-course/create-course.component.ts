import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorService } from '../../services/tutor.service';
import { LoginService } from '../../user/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
  standalone:false,
})
export class CreateCourseComponent implements OnInit {
  courseForm!: FormGroup;
  user!: any;
  userId!: any;
  courseId!: number;

  constructor(
    private fb: FormBuilder,
    private tutorService: TutorService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user = loginService.getUser();
    this.userId = this.user.userId;
  }

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('courseId')!;
    this.courseForm = this.fb.group({
      courseName: ['', [Validators.required]],
      imgurl: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      creatorId: [[this.userId,]]
    });
  }

  createCourse(): void {
    this.tutorService.createNewCourse(this.courseForm.value).subscribe(
      response => {
        console.log('Course created successfully!', response);
        alert('Course created successfully!');
        this.router.navigate(['/tutor-dashboard/get-my-created-courses']);
      },
      error => {
        console.error('Error creating course', error);
      }
    );

    this.courseForm.reset();
  }
}
