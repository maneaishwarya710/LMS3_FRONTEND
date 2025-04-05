import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorService } from '../../services/tutor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css'],
  standalone:false,
})
export class CreateQuizComponent implements OnInit {
  quizForm!: FormGroup;
  courseId!: number;

  constructor(
    private fb: FormBuilder,
    private tutorService: TutorService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('courseId')!;
    this.quizForm = this.fb.group({
      quizName:['', [Validators.required]],
      description: ['', [Validators.required]],
      totalmarks: ['', [Validators.required]],
    });
  }

  createQuiz(): void {
    const formData = {
      ...this.quizForm.value,
      courseId: this.courseId
    };

    this.tutorService.createNewQuiz(formData).subscribe(
      response => {
        console.log('Quiz created successfully', response);
        alert('Quiz created successfully!');
      },
      error => {
        console.error('Error creating quiz', error);
      }
    );

    this.quizForm.reset();
    this.router.navigate(['/tutor-dashboard/get-my-created-courses'])
  }
}
