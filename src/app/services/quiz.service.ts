import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'http://localhost:3004/quiz';

  constructor(private http: HttpClient) {}

  createQuiz(quiz: any, questions: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/newCreateQuiz`, { quizData: quiz, questions });
  }

  getQuizzesByCourseId(courseId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getQuizByCourseId/${courseId}`);
  }
  

}
