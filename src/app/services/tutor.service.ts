import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  private apiUrl = 'http://localhost:3003/tutor'; 
  constructor(private http: HttpClient) {}

  createNewCourse(courseData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cc`, courseData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  createNewCourseContent(courseContentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ccc`, courseContentData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  createNewQuiz(quizData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cquiz`, quizData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  createResult(resultData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cresult`, resultData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  removeCourseById(courseId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${courseId}`);
  }

}
