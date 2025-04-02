import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdViewAllUsersComponent } from './ad-view-all-users/ad-view-all-users.component';
import { AddRemoveUserComponent } from './add-remove-user/add-remove-user.component';
import { AdAddUserComponent } from './ad-add-user/ad-add-user.component';
import { AdPaymentListComponent } from './ad-payment-list/ad-payment-list.component';
import { AdEnrollsListComponent } from './ad-enrolls-list/ad-enrolls-list.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdViewAllUsersComponent,
    AddRemoveUserComponent,
    AdAddUserComponent,
    AdPaymentListComponent,
    AdEnrollsListComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AdminDashboardComponent,
    AdViewAllUsersComponent,
    AddRemoveUserComponent
  ]
})
export class DashboardsModule { }
