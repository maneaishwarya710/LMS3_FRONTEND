import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdViewAllUsersComponent } from './ad-view-all-users/ad-view-all-users.component';
import { AddRemoveUserComponent } from './add-remove-user/add-remove-user.component';
import { AdAddUserComponent } from './ad-add-user/ad-add-user.component';
import { AdPaymentListComponent } from './ad-payment-list/ad-payment-list.component';
import { AdEnrollsListComponent } from './ad-enrolls-list/ad-enrolls-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from '../guards/admin.guard';
import { ProfileComponent } from '../user/profile/profile.component';

const routes: Routes = [
  {path:'ad-view-all-users', component:AdViewAllUsersComponent},
  {path:'add-remove-user', component:AddRemoveUserComponent},
  {path:'ad-add-user', component:AdAddUserComponent},
  {path:'ad-payment-list', component:AdPaymentListComponent},
  {path:'ad-enrolls-list', component:AdEnrollsListComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent, canActivate:[AdminGuard]},
  {path: '', redirectTo: '/admin-dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
