import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscussionListComponent } from './discussion-list/discussion-list.component';
import { DiscussionDetailsComponent } from './discussion-details/discussion-details.component';

const routes: Routes = [
  {path:'discussion-list', component:DiscussionListComponent},
  {path:'discussion-details/:id', component:DiscussionDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionRoutingModule { }
