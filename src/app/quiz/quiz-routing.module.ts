import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { GetQuizByCourseIdComponent } from './get-quiz-by-course-id/get-quiz-by-course-id.component';

const routes: Routes = [
  {path:'new-quiz', component:NewQuizComponent},
  {path:'get-quiz-by-course-id', component:GetQuizByCourseIdComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
