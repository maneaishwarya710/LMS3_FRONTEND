import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorService } from '../../services/tutor.service';

@Component({
  selector: 'app-create-result',
  standalone: false,
  templateUrl: './create-result.component.html',
  styleUrl: './create-result.component.css'
})
export class CreateResultComponent {
  resultForm!: FormGroup;

  constructor(private fb: FormBuilder, private tutorService: TutorService) {}

  ngOnInit(): void {
    this.resultForm = this.fb.group({
      score: ['', [Validators.required]],
      courseId: ['', [Validators.required]],
      quizId: ['', [Validators.required]],
      userId: ['', [Validators.required]]
    });
  }

  createResult(): void {
    this.tutorService.createResult(this.resultForm.value).subscribe(
      response => {
        console.log('Result created successfully', response);
        alert("Result created successfully!");
      },
      (error: any) => {
        console.error('Error creating result', error);
      }
    );
    
    this.resultForm.reset();
  }
}

