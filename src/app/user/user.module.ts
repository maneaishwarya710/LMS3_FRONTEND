import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { ProfileComponent } from './profile/profile.component';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
],
providers:[
  CookieService
],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
