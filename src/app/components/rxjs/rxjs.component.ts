import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscriber,
  Subscription,
  combineLatest,
  concat,
  exhaustMap,
  filter,
  forkJoin,
  from,
  fromEvent,
  map,
  mergeMap,
  of,
  switchMap,
  timer,
} from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements AfterViewInit {
  /*
    observers(gözlemci) (subscribers-abone-dinleyen)
    observable(gölemlenebilen)
    next,error,complete
    RxJS 3party -> Reactive Extensions Library for Javascript
    angularda:
    http requests
    value/status changes fromlardan
    router navigation
    parent-child-cross communication
  */

  @ViewChild('button', { static: true }) button: any;
  clicks!: Observable<any>;
  count = 0;

  subject = new Subject<string>();
  behaviorSubject = new BehaviorSubject<string>('test');

  constructor(private http: HttpClient, private userService: UserService) {
    // const obs = new Observable<number>((observer: Subscriber<number>) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.next(4);
    //   observer.next(5);
    //   observer.error('An error occurred!');
    //   observer.complete();
    // });
    // const obs = new Observable((observer) => {
    //   console.log('Observable starts');

    //   setTimeout(() => {
    //     observer.next('1');
    //   }, 1000);
    //   setTimeout(() => {
    //     observer.next('2');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('3');
    //   }, 3000);
    //   setTimeout(() => {
    //     observer.next('4');
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.next('5');
    //   }, 5000);
    // });

    // const array1 = [1, 2, 3, 4, 5, 6, 7];
    // const array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    // const obs = of(array1, array2);

    // const obs = from('Hello World');

    // const timerOne$ = timer(1000, 4000);
    // const timerTwo$ = timer(2000, 4000);
    // const timerThree$ = timer(3000, 4000);

    // const obs = combineLatest(
    //   timerOne$,
    //   timerTwo$,
    //   timerThree$,
    //   (one, two, three) => {
    //     return `Timer One (Proj) Latest: ${one},
    //           Timer Two (Proj) Latest: ${two},
    //           Timer Three (Proj) Latest: ${three}`;
    //   }
    // );

    // const obs = concat(
    //   of(1, 2, 3),
    //   // subscribed after first completes
    //   of(4, 5, 6),
    //   // subscribed after second completes
    //   of(7, 8, 9)
    // );

    // let req1 = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    // let req2 = this.http.get('https://jsonplaceholder.typicode.com/todos/2');
    // let req3 = this.http.get('https://jsonplaceholder.typicode.com/todos/3');

    //promise.all
    // forkJoin([req1, req2, req3]).subscribe((responseList) => {
    //   console.log('res1', responseList[0]);
    //   console.log('res2', responseList[1]);
    //   console.log('res3', responseList[2]);
    // });

    // const obs = new Observable((observer) => {
    //   observer.next(1)
    //   observer.next(2)
    //   observer.next(3)
    //   observer.next(4)
    //   observer.next(5)
    //   observer.complete()
    // }).pipe(
    //   filter((val: any) => val > 2),
    //   map((val) => { return val as number * 2 }),
    // )

    // const subscription: Subscription = obs.subscribe(
    //   (data: any) => console.log('Value:', data),
    //   (error: any) => console.error('Error:', error),
    //   () => console.log('Complete')
    // );

    // setTimeout(() => {
    //   subscription.unsubscribe();
    // })

    const subscription: Subscription = this.behaviorSubject.subscribe(
      (data: any) => console.log('Value:', data),
      (error: any) => console.error('Error:', error),
      () => console.log('Complete')
    );

    setTimeout(() => {
      this.behaviorSubject.next('hello from rxjs component');
    }, 2000);

    setTimeout(() => {
      this.behaviorSubject.next('hello after 2 seconds');
    }, 4000);

    this.userService
      .getUser()
      .subscribe((value: any) => console.log('rxjs component', value));
  }

  ngAfterViewInit() {
    this.clicks = fromEvent(this.button.nativeElement, 'click');
    this.mergeMap();
  }

  obsFac(count: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(count + ' A');
      }, 1000);
      setTimeout(() => {
        observer.next(count + ' B');
      }, 2000);
      setTimeout(() => {
        observer.next(count + ' C');
      }, 3000);
      setTimeout(() => {
        observer.next(count + ' D');
      }, 4000);
      setTimeout(() => {
        observer.next(count + ' E');
        observer.complete();
      }, 5000);
    });
  }

  mergeMap() {
    this.clicks
      .pipe(
        exhaustMap(() => {
          this.count = this.count + 1;
          return this.obsFac(this.count);
        })
      )
      .subscribe((val) => console.log(val));
  }
}
