import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  api='http://localhost:3003/user/register'
  getRegisterMessage(data:any):Observable<any>{
    return this.http.post(this.api,data,{
      headers:{
        "Content-type":"application/json"
      }
    })
  }
}
