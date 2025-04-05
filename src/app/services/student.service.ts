import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3004/student';

  constructor(private http: HttpClient) {}

  enroll(enrollmentDTO: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/enroll`, enrollmentDTO, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getEnrolledCourses(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getenrolled/${userId}`);
  }


  
  getStudentResults(userId: number): Observable<any> {
    console.log("hi");
    
    return this.http.get(`${this.apiUrl}/getresult/${userId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getPaymentsByUserId(userId: number): Observable<any> {
    console.log("Payment service");
    
    return this.http.get(`${this.apiUrl}/getpaylist/${userId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }


}

