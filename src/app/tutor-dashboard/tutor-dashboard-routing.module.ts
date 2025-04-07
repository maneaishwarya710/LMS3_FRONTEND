import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './create-course/create-course.component';
import { TutorsDashboardComponent } from './tutors-dashboard/tutors-dashboard.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { CreateResultComponent } from './create-result/create-result.component';
import { RemoveCourseComponent } from './remove-course/remove-course.component';
import { TutorGuard } from '../guards/tutor.guard';
import { GetMyCreatedCoursesComponent } from './get-my-created-courses/get-my-created-courses.component';
import { GetContentByCourseIdComponent } from './get-content-by-course-id/get-content-by-course-id.component';

const routes: Routes = [
  {path:'create-course', component:CreateCourseComponent},
  {path:'tutors-dashboard', component:TutorsDashboardComponent, canActivate:[TutorGuard]},
  {path:'course-content/:courseId', component:CourseContentComponent},
  {path:'create-result', component:CreateResultComponent},
  {path:'remove-course', component:RemoveCourseComponent},
  {path:'get-my-created-courses', component:GetMyCreatedCoursesComponent},
  {path:'new-quiz/:courseId', component:GetContentByCourseIdComponent},
  {path:'get-content-by-course-id/:courseId', component:GetContentByCourseIdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorDashboardRoutingModule { }
