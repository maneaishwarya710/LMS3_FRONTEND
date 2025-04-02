import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userTypeSubject = new BehaviorSubject<string | null>(null);
  userType$ = this.userTypeSubject.asObservable();

  private userSubject = new BehaviorSubject<any>(this.getUserFromStorage());
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private cookieService: CookieService) {}
  api = 'http://localhost:3003/user/login';

  setToken(token: string): void {
    // localStorage.setItem('token', token);
    this.cookieService.set('token', token, 7); 
  }

  setUser(user: any): void {
    // localStorage.setItem('user', JSON.stringify(user));
    this.cookieService.set('user', JSON.stringify(user), 7); 
    this.setUserType(user.userType);
    this.userSubject.next(user);
  }

  getUserFromStorage(): any {
    if (this.cookieService) {
      const user = this.cookieService.get('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  getUser(): any {
    // return JSON.parse(localStorage.getItem('user') || '{}');
    return JSON.parse(this.cookieService.get('user') || '{}');
  }

  clearAuthData(): void {
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    this.cookieService.delete('token');
    this.cookieService.delete('user');
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
    return this.http.post(this.api, data, {
      headers: {
        'Content-type': 'application/json'
      }
    });
  }
}
