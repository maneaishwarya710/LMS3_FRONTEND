import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'http://localhost:3004/quiz';

  constructor(private http: HttpClient) { }

  createQuiz(quiz: any, questions: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/newCreateQuiz`, { quizData: quiz, questions });
  }

  // getQuizzesByCourseId(courseId: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.baseUrl}/getQuizByCourseId/${courseId}`);
  // }

  getQuizByCourseId(courseId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getQuizByCourseId/${courseId}`);
  }
  submitQuiz(attemptData: any, answers: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/submitQuiz`, {
      attemptData,
      answers
    });
  }
  getResultsByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getResultByUserId/${userId}`);
  }

  // getQuizByCourseId(courseId: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/course/${courseId}`);
  // }

  // submitQuiz(data: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/submit`, data);
  // }

  // getResultsByUserId(userId: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/results/${userId}`);
  // }


}
