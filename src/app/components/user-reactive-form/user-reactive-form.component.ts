import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { strengthPassword } from 'src/app/validators/strength-password.validator';

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
      lastName: [{ value: '', disabled: true }, Validators.required],
      email: 'johndoe@gmail.com',
      password: ['', [Validators.required, strengthPassword()]],
      address: this.formBuilder.group({
        city: 'Ankara',
        street: 'Baglica',
      }),
    });

    this.userForm?.statusChanges.subscribe((value) => {
      console.log(value);
    });
    // this.userForm.get('password')?.statusChanges.subscribe((value) => {
    //   console.log(value);
    // })

    this.userForm?.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.userForm.get('lastName')?.enable();
    // this.userForm.get('lastName')?.disable();

    this.userForm.get('address')?.valueChanges.subscribe((value) => {
      console.log(value);
      if(value.city === 'istanbul') {
        this.userForm.get('email')?.setValidators(Validators.required);
        this.userForm.get('email')?.clearValidators();
        this.userForm.get('email')?.updateValueAndValidity();
      }
    });

    const user = {
      firstName: 'Lucy',
      lastName: 'Doe2',
      email: 'lucydoe@gmail.com',
      password: '',
      address: {
        city: 'istanbul',
        street: 'kadıköy',
      },
    };
    this.userForm.patchValue(user);
    // this.userForm.setValue(user)


//     angular default validators:
// class Validators {
//   static min(min: number): ValidatorFn
//   static max(max: number): ValidatorFn
//   static required(control: AbstractControl): ValidationErrors | null
//   static requiredTrue(control: AbstractControl): ValidationErrors | null
//   static email(control: AbstractControl): ValidationErrors | null
//   static minLength(minLength: number): ValidatorFn
//   static maxLength(maxLength: number): ValidatorFn
//   static pattern(pattern: string | RegExp): ValidatorFn
//   static nullValidator(control: AbstractControl): ValidationErrors | null
//   static compose(validators: ValidatorFn[]): ValidatorFn | null
//   static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn | null
// }

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
