import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-quiz',
  standalone: false,
  templateUrl: './new-quiz.component.html',
  styleUrl: './new-quiz.component.css'
})
export class NewQuizComponent {
  quizForm!: FormGroup;

  constructor(private fb: FormBuilder, private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizForm = this.fb.group({
      quizName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      totalmarks: ['', [Validators.required]],
      courseId: ['', [Validators.required]],
      questions: this.fb.array([])
    });
  }

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  addQuestion(): void {
    this.questions.push(this.fb.group({
      questionText: ['', [Validators.required]],
      correctOptionId: ['', [Validators.required]],
      options: this.fb.array([])
    }));
  }

  addOption(questionIndex: number): void {
    const options = this.questions.at(questionIndex).get('options') as FormArray;
    options.push(this.fb.group({
      optionText: ['', [Validators.required]]
    }));
  }

  createQuiz(): void {
    this.quizService.createQuiz(this.quizForm.value, this.questions.value).subscribe(
      response => {
        console.log('Quiz created successfully', response);
        alert('Quiz created successfully!');
      },
      error => {
        console.error('Error creating quiz', error);
      }
    );

    this.quizForm.reset();
  }
}















