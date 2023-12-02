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
}
