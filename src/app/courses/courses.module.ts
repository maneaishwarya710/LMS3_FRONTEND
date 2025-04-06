import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { GetAllCoursesComponent } from './get-all-courses/get-all-courses.component';


@NgModule({
  declarations: [
    GetAllCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports:[
    GetAllCoursesComponent
  ]
})
export class CoursesModule { }
