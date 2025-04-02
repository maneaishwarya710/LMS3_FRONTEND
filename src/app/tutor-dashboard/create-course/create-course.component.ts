import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorService } from '../../services/tutor.service';

@Component({
  selector: 'app-create-course',
  standalone: false,
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent {
  courseForm!: FormGroup;

  constructor(private fb: FormBuilder, private tutorService:TutorService) {}

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      courseName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  createCourse(): void {
    this.tutorService.createNewCourse(this.courseForm.value).subscribe(
      response => {
        console.log('Course created successfully!', response);
        alert("Course created successfully!");
      },
      error => {
        console.error('Error creating course', error);
      }
    );
    
    this.courseForm.reset();
  }

}
