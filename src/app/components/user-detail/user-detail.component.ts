import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['id']);
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));

    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id'];
    });

    this.activatedRoute.queryParamMap.subscribe((params: any) => {
      console.log('queryParams:', params['isUserActive']);
    });

    this.userService.getUserById(this.id).subscribe((user: User) => {
      console.log(user);
    });
  }

  returnBack() {
    this.router.navigate(['../']);
  }
}
