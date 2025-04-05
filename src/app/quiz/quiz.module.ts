import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuizRoutingModule } from './quiz-routing.module';
import { NewQuizComponent } from './new-quiz/new-quiz.component';


@NgModule({
  declarations: [
    NewQuizComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuizModule { }
