import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environment/environment';
import {User} from '@shared/models/user';
import {tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

export interface SignInResult {
  user: User;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('USER')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  signIn(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/users/login`, {email, password}).pipe(
      tap(user => {
        if (user.token) {
          localStorage.setItem('TOKEN', user.token);
          localStorage.setItem('USER', JSON.stringify(user.user));
          this.currentUserSubject.next(user);
          return user;
        }
      })
    );
  }

  signOut() {
    localStorage.removeItem('USER');
    localStorage.removeItem('TOKEN');
    this.currentUserSubject.next(null);
  }
}
