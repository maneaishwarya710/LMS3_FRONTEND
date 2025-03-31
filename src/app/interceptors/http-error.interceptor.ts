import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private snackBar:MatSnackBar) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse)=>{
                let errorMessage="An unknown message occured!-------HttpErrorInterceptor";
                if(error.error instanceof ErrorEvent){
                    errorMessage=`client side error: ${error.error.message}`;
                }else{
                    errorMessage=`server error (${error.status}):${error.message}`
                }
                console.log(errorMessage);

                this.snackBar.open(errorMessage, "Close", {
                    duration:3000,
                    panelClass:["error-snackbar"]
                });
                return throwError(()=>new Error(errorMessage));
            })
        );
    }
}

