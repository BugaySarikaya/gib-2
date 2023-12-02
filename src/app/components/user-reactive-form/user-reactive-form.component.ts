import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.scss'],
})
export class UserReactiveFormComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // new FormGroup()
    // new FormControl()
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [{value: '', disabled: true}, Validators.required],
      email: 'johndoe@gmail.com',
      password: '',
      address: this.formBuilder.group({
        city: 'Ankara',
        street: 'Baglica',
      }),
    });

    this.userForm.get('firstName')?.enable();
    this.userForm.get('firstName')?.disable();
  }

  get firstName() {
    return this.userForm.get('firstName');
  }
  get password() {
    return this.userForm.get('password');
  }

  reset() {}

  onSubmit() {}
}
