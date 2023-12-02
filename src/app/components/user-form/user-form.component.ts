import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, AfterViewInit {
  @ViewChild('userForm', {static: true}) userForm!: NgForm;

  user = {
    firstName: '',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    password: '',
    address: {
      city: 'Ankara',
      street: 'Baglica',
    },
  };

  ngOnInit(): void {
    //backend call, kullanıcının login olduğu idsi ile backende istek attım, gelen değerleri doldurdum
    // this.user.firstName = 'Lucy';
    setTimeout(() => {
      console.log('ngOnInit', this.userForm);
    }, 0);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.userForm);
    }, 0);
  }

  onSubmit(userForm: NgForm) {
    //http isteğini burada yapıyorsunuz
    console.log(userForm);
  }

  reset(userForm: NgForm) {
    userForm.resetForm();
  }
}
