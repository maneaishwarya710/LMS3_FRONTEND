import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDashboardRoutingModule } from './student-dashboard-routing.module';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';
import { EnrollComponent } from './enroll/enroll.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';
import { GetResultComponent } from './get-result/get-result.component';
import { GetPaymentComponent } from './get-payment/get-payment.component';




@NgModule({
  declarations: [
    StudentsDashboardComponent,
    EnrollComponent,
    EnrolledCoursesComponent,
    GetResultComponent,
    GetPaymentComponent,
  ],
  imports: [
    CommonModule,
    StudentDashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentDashboardModule { }
