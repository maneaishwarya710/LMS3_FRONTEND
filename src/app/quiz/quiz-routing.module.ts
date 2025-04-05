import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewQuizComponent } from './new-quiz/new-quiz.component';

const routes: Routes = [
  {path:'new-quiz', component:NewQuizComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
