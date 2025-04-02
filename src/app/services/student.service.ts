import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3003/student';

  constructor(private http: HttpClient) {}

  enroll(enrollmentDTO: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/enroll`, enrollmentDTO, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // getEnrolledCourses(userId: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/getenrolled/${userId}`);
  // }
  getEnrolledCourses(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getenrolled/${userId}`);
  }
  

  getStudentResults(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getresult/${userId}`);
  }

  getPaymentsByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getpaylist/${userId}`);
  }
}




