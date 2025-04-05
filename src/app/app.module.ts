import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { GlobalErrorHandler } from './global-error-handler';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from './shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './user/login.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    MatSnackBarModule,
    SharedModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true,},
    {provide:ErrorEvent,useClass:GlobalErrorHandler},
    {provide:HTTP_INTERCEPTORS,useClass:HttpErrorInterceptor,multi:true,},
    CookieService, LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
