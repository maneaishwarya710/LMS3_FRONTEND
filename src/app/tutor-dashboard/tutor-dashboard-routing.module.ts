import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './create-course/create-course.component';
import { TutorsDashboardComponent } from './tutors-dashboard/tutors-dashboard.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { CreateResultComponent } from './create-result/create-result.component';
import { RemoveCourseComponent } from './remove-course/remove-course.component';
import { TutorGuard } from '../guards/tutor.guard';

const routes: Routes = [
  {path:'create-course', component:CreateCourseComponent},
  {path:'tutors-dashboard', component:TutorsDashboardComponent, canActivate:[TutorGuard]},
  {path:'course-content', component:CourseContentComponent},
  {path:'create-quiz', component:CreateQuizComponent},
  {path:'create-result', component:CreateResultComponent},
  {path:'remove-course', component:RemoveCourseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorDashboardRoutingModule { }
