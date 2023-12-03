import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { APIURL } from 'src/app/app.module';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { strengthPassword } from 'src/app/validators/strength-password.validator';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.scss'],
  // providers: [userService]
})
export class UserReactiveFormComponent implements OnInit, OnDestroy {
  userForm: FormGroup = new FormGroup({});
  // userService: UserService;
  users: User[] = [];
  subscription!: Subscription;
  isLoading: boolean = false;
  isUserActive: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    @Inject(APIURL) public ApiUrl: string //@Self, @SkipSelf, @Optional, @Host
  ) {
    // this.userService = new UserService;
    // this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
    // new FormGroup()
    // new FormControl()
    this.getUserList();
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: [{ value: '', disabled: true }, Validators.required],
      age: null,
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

    this.userForm.get('surname')?.enable();
    // this.userForm.get('surname')?.disable();

    this.userForm.get('address')?.valueChanges.subscribe((value) => {
      console.log(value);
      if (value.city === 'istanbul') {
        this.userForm.get('email')?.setValidators(Validators.required);
        this.userForm.get('email')?.clearValidators();
        this.userForm.get('email')?.updateValueAndValidity();
      }
    });

    const user = {
      name: 'Lucy',
      surname: 'Doe2',
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

  getUserList() {
    this.isLoading = true;

    setTimeout(() => {
      this.userService
        .getUsers()
        .subscribe((users: User[]) => {
          this.users = users;
        })
        .add(() => {
          this.isLoading = false;
        });
    }, 2500);
  }

  get name() {
    return this.userForm.get('name');
  }
  get password() {
    return this.userForm.get('password');
  }

  reset() {}

  onSubmit() {
    this.userService.saveUser(this.userForm.value).subscribe(() => {
      this.getUserList();
    });
  }

  deleteUser(i: any) {
    this.userService.deleteUser(i).subscribe(() => {
      this.getUserList();
    });
  }

  /*
    Dependency Injection Parts

    Consumer(tüketici) (Component,Directive,Service) dependencye ihtiyaç duyanlar, örneğin Rxjs component

    Dependency: UserService

    Injection Token(DI Token): new lediğimiz dependencyi uniqueleştirir key:UserService

    Provider(sağlayıcı): injection tokenları alıp dependencyleri oluşturur ve yönetir 

    ModuleInjector Hierarchy:
    Null Injector -> Platform Module -> Root Module -> Lazy Module A, Lazy Module B
  */

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
