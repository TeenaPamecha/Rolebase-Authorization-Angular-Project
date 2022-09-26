import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/core/models';
import { UserService } from '@app/core/services';

@Component({ templateUrl: 'admin.component.html',styleUrls: ['./admin.component.less'] })
export class AdminComponent implements OnInit {
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