import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userTypeSubject = new BehaviorSubject<string | null>(null);
  userType$ = this.userTypeSubject.asObservable();

  private userSubject = new BehaviorSubject<any>(this.getUserFromStorage());
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }
  api = 'http://localhost:3004/user/login';

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.setUserType(user.userType); 
    this.userSubject.next(user); 
  }

  getUserFromStorage(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  clearAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userTypeSubject.next(null); 
    this.userSubject.next(null); 
  }

  logout(): void {
    this.clearAuthData();
  }

  setUserType(userType: string): void {
    this.userTypeSubject.next(userType);
  }

  getUserType(): string | null {
    return this.userTypeSubject.value;
  }

  getLoginMessage(data: any): Observable<any> {

    console.log({data})
    return this.http.post(this.api, data, {
      headers: {
        'Content-type': 'application/json'
      }
    });
  }
}
