import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // inputs: ['count']
})
export class ChildComponent implements OnChanges, AfterContentInit {
  @Input() count: number = 0;
  @Output() countChanged: EventEmitter<number> = new EventEmitter<number>();

  // @Input('CustomCount') count: number = 0;
  // count: number = 0;

  @ContentChild('content') content!: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    // if (changes['count']) {
    //   console.log(this.count);
    // }

    // for (let property in changes) {
    //   if (property === 'count') {
    //     console.log('Previous:', changes[property].previousValue);
    //     console.log('Current:', changes[property].currentValue);
    //     console.log('firstChange:', changes[property].firstChange);
    //   }
    // }
  }

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }

  ngAfterContentInit() {
    // console.log(this.content);
  }
}
