import { Component } from '@angular/core';
import { TutorService } from '../../services/tutor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-content',
  standalone: false,
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.css'
})
export class CourseContentComponent {
  courseContentForm!: FormGroup;

 constructor(private fb: FormBuilder, private tutorService: TutorService){}

  ngOnInit(): void {
    this.courseContentForm = this.fb.group({
      contentType: ['', [Validators.required]],
      content: ['', [Validators.required]],
      courseId: ['', [Validators.required]]
    });
  }

  createCourseContent(): void {
    this.tutorService.createNewCourseContent(this.courseContentForm.value).subscribe(
      response => {
        console.log('Course content created successfully', response);
        alert("Course content created successfully!");
      },
      (error: any) => {
        console.error('Error creating course content', error);
      }
    );
    
    this.courseContentForm.reset();
  }
  
}
