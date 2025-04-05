import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuizRoutingModule } from './quiz-routing.module';
import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { GetQuizByCourseIdComponent } from './get-quiz-by-course-id/get-quiz-by-course-id.component';


@NgModule({
  declarations: [
    NewQuizComponent,
    GetQuizByCourseIdComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuizModule { }
