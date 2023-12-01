import { Component, ViewEncapsulation } from '@angular/core';

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
export class AppComponent {
  title = 'gib';
}
