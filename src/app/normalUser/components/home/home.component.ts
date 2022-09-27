import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/core/models';
import { UserService, AuthenticationService } from '@app/core/services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  loading = false;
  user: User;
  userFromApi: User;

  constructor(
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.user = this.authenticationService.userValue;
  }

  ngOnInit() {
    this.loading = true;

    if (this.user) {
      this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
        this.loading = false;
        this.userFromApi = user;
      });
    }
    else {
      this.router.navigate(['/login']);
    }

  }

}
