import { Component, OnInit } from '@angular/core';
import { User } from '@app/core/models';
import { UserService } from '@app/core/services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.less']
})
export class RoleListComponent implements OnInit {

  loading = false;
  users: User[] = [];
  today = new Date();

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.loading = true;
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.loading = false;
          this.users = users;
      });
  }

}
