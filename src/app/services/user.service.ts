import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userSubject = new Subject<string>();
  userBehaviorSubject = new BehaviorSubject<string>('john');

  constructor() {
    this.setUser();
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
}
