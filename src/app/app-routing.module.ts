import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'user', loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'dashboards', loadChildren:()=>import('./dashboards/dashboards.module').then(m=>m.DashboardsModule)},
  {path:'homepage', component:HomepageComponent},
  {path:'tutor-dashboard', loadChildren:()=>import('./tutor-dashboard/tutor-dashboard.module').then(m=>m.TutorDashboardModule)},
  {path:'student-dashboard', loadChildren:()=>import('./student-dashboard/student-dashboard.module').then(m=>m.StudentDashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
