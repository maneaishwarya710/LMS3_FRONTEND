import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDashboardRoutingModule } from './student-dashboard-routing.module';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';
import { EnrollComponent } from './enroll/enroll.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';


@NgModule({
  declarations: [
    StudentsDashboardComponent,
    EnrollComponent,
    EnrolledCoursesComponent
  ],
  imports: [
    CommonModule,
    StudentDashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentDashboardModule { }
