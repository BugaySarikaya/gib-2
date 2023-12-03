import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <div>test</div>
  // <p>test</p>`,
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.ShadowDom //shadow dom
})
export class AppComponent implements OnInit {
  title = 'String Interpolation(1-way)';
  makeRedWithClass: string = 'makeRed';
  makeRedStyle: string = 'red';
  imageRef: string =
    'https://angular.io/assets/images/logos/angular/angular.png';
  documentLinkRef: string = 'https://angular.io';
  pText: string = 'Lorem ipsum dolor sit amet.';
  isButtonDisabled: boolean = true;
  dynamicValue: string = 'Initial Value';
  firstName: string = 'John';
  messageForPipeEx: string = 'Lorem ipsum dolor sit amet.';
  currentDate: Date = new Date();
  gibUser = {
    name: 'John',
    lastName: 'Doe',
    age: 30,
  };
  randomText: string =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, minima.';

  currentTime$!: Observable<Date>;
  randomDate: string = '';
  serverCreated: boolean = true;
  users: any[] = [];
  luckyNumber: number = 6;
  inputDeger = '';
  ogrenciListesi: string[] = ['ali', 'veli', 'ayşe', 'can'];

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.currentTime$ = interval(1000).pipe(map(() => new Date()));
    this.randomDate = this.datePipe.transform(new Date()) || '';
    this.refreshUserList();

    // this.userService
    //   .getUser()
    //   .subscribe((value: any) => console.log('app component', value));
  }

  getTitle() {
    return this.title;
  }

  updateDynamicValue(event: Event) {
    const inputEvent = event as InputEvent;
    this.dynamicValue = (inputEvent?.target as HTMLInputElement).value;
  }

  activateButton() {
    this.isButtonDisabled = false;
  }

  firstNameChanged(value: string) {
    console.log('model changed new value:', value);
  }

  lastNameChanged(value: Event) {
    console.log('lastNameChanged:', (value.target as HTMLInputElement).value);
  }

  addNewUser() {
    const newUser = {
      id: Math.random() * 10,
      name: 'Lucy',
      surname: 'Doe',
      age: 25,
      email: 'lucydoe@test.com',
    };

    this.users.push(newUser);
  }

  deleteUser(i: any) {
    this.users.splice(i, 1);
  }

  refreshUserList() {
    this.users = [
      {
        id: 1,
        name: 'John',
        surname: 'Doe',
        age: 15,
        email: 'test@test.com',
      },
      {
        id: 2,
        name: 'Jack',
        surname: 'Doe',
        age: 16,
        email: 'test@test.com',
      },
      {
        id: 3,
        name: 'Elisa',
        surname: 'Doe',
        age: 25,
        email: 'test@test.com',
      },
      {
        id: 4,
        name: 'Alex',
        surname: 'Doe',
        age: 28,
        email: 'test@test.com',
      },
      {
        id: '5',
        name: 'Chris',
        surname: 'Doe',
        age: 32,
        email: 'test@test.com',
      },
    ];
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  isValid(): boolean {
    return true;
  }
}
