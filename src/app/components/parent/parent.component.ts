import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  counter: number = 5;
  @ViewChild(ChildComponent) child!: ChildComponent; //ilk değeri vermediğimde emin misin diye uyarı veriyor
  @ViewChild('counterDiv') counterDiv!: ElementRef;

  constructor() {
    //dependencies
  }

  ngOnChanges() {
    //simplechanges
  }

  ngOnInit() {
    //component initialize olduktan sonra, ben artık hazırım der
    //backend api isteklerimi, component logiclerimi buraya yazabilirim
    //@ViewChild/@ViewChildren/@ContentChild/@ContentChildren
  }

  ngDoCheck() {
    //change detection strategy //input değişikliklerinde, dom eventlerinde,
    //setTimeout, setInterval, http requests
    //debugging
    console.log('ngDoChecked is triggered')
  }

  ngAfterContentInit() {
    //content hazır olduğunda <p>test</p> buradaki test contenttir.
    //@ContentChild
  }

  ngAfterContentChecked() {
    //content hazır olduğunda ve her change detection çalıstığında
  }

  ngAfterViewInit() {
    //@ViewChild, templateteki elementler erişme hazır, render oldu
    // console.log(this.counterDiv);
  }

  ngAfterViewChecked() {
    // Sayfa render oldu ve her change detection çalıstığında
  }

  increment() {
    // this.counter++;
    console.log(this.child);
    this.child.increment();
  }

  decrement() {
    this.counter--;
  }

  countChangeHandler(value: number) {
    this.counter = value;
  }

  ngOnDestroy() {
    //garbage collector
    //componete bağlı olan değerleri temizle, mevcsut statu durumunu default'a cek
    //observable, http call subscribe yaptıklarını unsubscribe et
  }
}
