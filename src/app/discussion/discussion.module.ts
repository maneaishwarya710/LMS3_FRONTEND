import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscussionRoutingModule } from './discussion-routing.module';
import { DiscussionListComponent } from './discussion-list/discussion-list.component';
import { DiscussionDetailsComponent } from './discussion-details/discussion-details.component';
import { FormsModule } from '@angular/forms';
import { FloatingDiscussionButtonComponent } from './floating-discussion-button/floating-discussion-button.component';


@NgModule({
  declarations: [
    DiscussionListComponent,
    DiscussionDetailsComponent,
    FloatingDiscussionButtonComponent
  ],
  imports: [
    CommonModule,
    DiscussionRoutingModule,
    FormsModule
  ],
  exports:[
    FloatingDiscussionButtonComponent
  ]
})
export class DiscussionModule { }
