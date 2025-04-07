import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { GetAllCoursesComponent } from './get-all-courses/get-all-courses.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetAllCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule
  ],
  exports:[
    GetAllCoursesComponent
  ]
})
export class CoursesModule { }
