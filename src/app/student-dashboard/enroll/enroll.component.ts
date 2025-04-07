import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../user/login.service';

@Component({
  selector: 'app-enroll',
  standalone: false,
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent {
  enrollForm!: FormGroup;
  courseId!:number;

  user!:any;
  userId!:number;
  constructor(private fb: FormBuilder,private loginService: LoginService, private studentService: StudentService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('courseId')!;
    this.user=this.loginService.getUser();
    this.userId=this.user.userId;
    this.enrollForm = this.fb.group({
      enrollmentDate: ['', Validators.required], // Default to today's date
      completionStatus: ['Starting', Validators.required], 
      courseId: [this.courseId],
      userId: [this.userId]
    });
  }

  onSubmit(): void {
    this.studentService.enroll(this.enrollForm.value).subscribe(
      (res: any) => {
        console.log('Enrollment successful', res);
        alert('Enrollment successful!');
        this.enrollForm.reset();
        this.router.navigate(['/student-dashboard/enrolled-courses']);
      },
      (error: any) => {
        console.error('Error enrolling:', error);
        alert('Unable to enroll. Please try again later.');
      }
    );
  }
}



