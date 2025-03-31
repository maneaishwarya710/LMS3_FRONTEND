import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=localStorage.getItem('token');

    console.log("Interceptor Method")
    let modifiedReq=req;
    if(token){
      modifiedReq=req.clone({
        setHeaders:{
          Authorization:`Bearer ${token}`
        }
      });
      console.log("Authorization header is set...")
    }
    return next.handle(modifiedReq).pipe(
      catchError((error:HttpErrorResponse)=>{
        if(error.status===401){
          console.error('Unauthorized request- Redirect to login');
        }
        return throwError(error)
      })
    );
  } 
}