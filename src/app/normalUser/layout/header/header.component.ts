import { Component, OnInit } from '@angular/core';
import { Role, User } from '@app/core/models';
import { AuthenticationService } from '@app/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
  }

  ngOnInit() {

  }

  logout() {
    this.authenticationService.logout();
  }
}
