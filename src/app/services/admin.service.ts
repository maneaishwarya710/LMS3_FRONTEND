import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3004/admin';

  constructor(private http: HttpClient) {}

  viewAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/view`);
  }

  deleteUserByUsername(username: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${username}`);
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
  
  getStudentsWithEnrollments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/students-enrollments`);
}

  getTeachersWithCourses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/teachers-courses`);
  }
}
