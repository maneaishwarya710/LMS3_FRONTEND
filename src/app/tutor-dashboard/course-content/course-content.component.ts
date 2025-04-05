import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorService } from '../../services/tutor.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],
  standalone:false,
})
export class CourseContentComponent implements OnInit {
  courseContentForm!: FormGroup;
  courseId!: number;

  constructor(
    private fb: FormBuilder,
    private tutorService: TutorService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('courseId')!;
    this.courseContentForm = this.fb.group({
      contentType: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  createCourseContent(): void {
    const formData = {
      ...this.courseContentForm.value,
      courseId: this.courseId
    };

    this.tutorService.createNewCourseContent(formData).subscribe(
      response => {
        console.log('Course content created successfully', response);
        alert('Course content created successfully!');
      },
      (error: any) => {
        console.error('Error creating course content', error);
      }
    );
    this.courseContentForm.reset();
    this.router.navigate(['/tutor-dashboard/get-my-created-courses'])
    
  }
}
