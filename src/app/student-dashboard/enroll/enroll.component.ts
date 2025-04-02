import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-enroll',
  standalone: false,
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentService) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      enrollmentDate: ['', Validators.required],
      completionStatus: ['', Validators.required],
      courseId: ['', Validators.required],
      userId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.studentService.enroll(this.enrollForm.value).subscribe(
      (res: any) => {
        console.log('Enrollment successful', res);
        alert('Enrollment successful!');
        this.enrollForm.reset();
      },
      (error: any) => {
        console.error('Error enrolling', error);
        alert('Unable to enroll!');
      }
    );
  }
}



