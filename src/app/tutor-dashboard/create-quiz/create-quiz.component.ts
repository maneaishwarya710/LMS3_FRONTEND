import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorService } from '../../services/tutor.service';

@Component({
  selector: 'app-create-quiz',
  standalone: false,
  templateUrl: './create-quiz.component.html',
  styleUrl: './create-quiz.component.css'
})
export class CreateQuizComponent {
  quizForm!: FormGroup;

  constructor(private fb: FormBuilder, private tutorService: TutorService) {}

  ngOnInit(): void {
    this.quizForm = this.fb.group({
      quizName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      totalmarks: ['', [Validators.required]],
      courseId: ['', [Validators.required]]
    });
  }

  createQuiz(): void {
    this.tutorService.createNewQuiz(this.quizForm.value).subscribe(
      response => {
        console.log('Quiz created successfully', response);
        alert("Quiz created successfully!");
      },
      error => {
        console.error('Error creating quiz', error);
      }
    );
    
    this.quizForm.reset();
  }

}
