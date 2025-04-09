import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  private baseUrl = 'http://localhost:3004/disc';
 constructor(private http: HttpClient) {}
 getAllDiscussions(): Observable<any[]> {
 return this.http.get<any[]>(`${this.baseUrl}/getAllPosts`);
 }
 getDiscussionById(id: number): Observable<any> {
 return this.http.get<any>(`${this.baseUrl}/getPostById/${id}`);
 }
 postQuestion(userId:number, data: any): Observable<any> {
 return this.http.post(`${this.baseUrl}/createPost/${userId}`, data);
 }
 postAnswer(postId: number, userId: number, newAnswer: { content: string; }, timestamp: unknown, Date: DateConstructor, discussionId: number, answer: any): Observable<any> {
 return this.http.post(`${this.baseUrl}/${discussionId}/addReply/${postId}/${userId}`, answer);
 }
}
