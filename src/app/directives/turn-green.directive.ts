import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTurnGreen]',
})
export class TurnGreenDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'white';

    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'gray'
    // );
  }
}
