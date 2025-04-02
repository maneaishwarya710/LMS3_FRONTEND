import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3003/admin';

  constructor(private http: HttpClient) {}

  viewAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/view`);
  }

  deleteUserById(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${userId}`);
  }
  
  addUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  paymentList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/paymentlist`);
  }
  
  enrollmentList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/enrolls`);
  }
  
}
