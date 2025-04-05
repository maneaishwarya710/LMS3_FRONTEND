import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TutorDashboardRoutingModule } from './tutor-dashboard-routing.module';
import { CreateCourseComponent } from './create-course/create-course.component';
import { TutorsDashboardComponent } from './tutors-dashboard/tutors-dashboard.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { CreateResultComponent } from './create-result/create-result.component';
import { RemoveCourseComponent } from './remove-course/remove-course.component';
import { GetMyCreatedCoursesComponent } from './get-my-created-courses/get-my-created-courses.component';
import { GetContentByCourseIdComponent } from './get-content-by-course-id/get-content-by-course-id.component';


@NgModule({
  declarations: [
    CreateCourseComponent,
    TutorsDashboardComponent,
    CourseContentComponent,
    CreateQuizComponent,
    CreateResultComponent,
    RemoveCourseComponent,
    GetMyCreatedCoursesComponent,
    GetContentByCourseIdComponent
  ],
  imports: [
    CommonModule,
    TutorDashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class TutorDashboardModule { }
