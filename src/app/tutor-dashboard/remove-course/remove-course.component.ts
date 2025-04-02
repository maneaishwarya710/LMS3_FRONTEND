import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorService } from '../../services/tutor.service';

@Component({
  selector: 'app-remove-course',
  standalone: false,
  templateUrl: './remove-course.component.html',
  styleUrl: './remove-course.component.css'
})
export class RemoveCourseComponent {
  removeCourseForm!: FormGroup;

  constructor(private fb: FormBuilder, private tutorService: TutorService) {}

  ngOnInit(): void {
    this.removeCourseForm = this.fb.group({
      courseId: ['', [Validators.required]]
    });
  }

  removeCourse(): void {
    const courseId = this.removeCourseForm.value.courseId;
    this.tutorService.removeCourseById(courseId).subscribe(
      response => {
        console.log('Course removed successfully', response);
        alert("User removed successfully!");
      },
      (error: any) => {
        console.error('Error removing course', error);
      }
    );
    
    this.removeCourseForm.reset();
  }
}

