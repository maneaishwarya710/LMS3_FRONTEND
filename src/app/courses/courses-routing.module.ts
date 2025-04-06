import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllCoursesComponent } from './get-all-courses/get-all-courses.component';

const routes: Routes = [
  {path:'get-all-courses', component:GetAllCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
