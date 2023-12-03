import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
}) //tree shaking
export class UserService {
  userSubject = new Subject<string>();
  userBehaviorSubject = new BehaviorSubject<string>('john');
  baseURL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
    // this.setUser();
  }

  getUser() {
    return this.userSubject;
  }

  setUser() {
    this.userSubject.next('Lucy');

    setTimeout(() => {
      this.userSubject.next('Alex');
    }, 2000);

    setTimeout(() => {
      this.userSubject.next('Can');
    }, 4000);
  }

  // getUsers(): User[] {
  //   let users: User[];
  //   users = [
  //     new User(1, 'John', 'Doe', 25, 'john@test.com'),
  //     new User(2, 'Alex', 'Doe', 26, 'alex@test.com'),
  //     new User(3, 'Lucy', 'Doe', 27, 'lucy@test.com'),
  //   ];
  //   return users;
  // }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'users');
  }

  getUserById(id: any): Observable<User> {
    return this.http.get<User>(this.baseURL + 'users/' + id);
  }

  saveUser(data: User): Observable<User> {
    return this.http.post<User>(this.baseURL + 'users', data);
  }

  updateUser(data: User, id: any): Observable<User> {
    return this.http.patch<User>(this.baseURL + 'users/' + id, data);
  }

  deleteUser(id: any): Observable<User> {
    return this.http.delete<User>(this.baseURL + 'users/' + id);
  }
}
