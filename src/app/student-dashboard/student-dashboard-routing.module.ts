import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';
import { EnrollComponent } from './enroll/enroll.component';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';

const routes: Routes = [
  {path:'students-dashboard', component:StudentsDashboardComponent},
  {path:'enroll', component:EnrollComponent},
  {path:'enrolled-courses', component:EnrolledCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDashboardRoutingModule { }
