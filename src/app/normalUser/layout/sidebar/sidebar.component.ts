import { Component, OnInit } from '@angular/core';
import { Role, User } from '@app/core/models';
import { AuthenticationService } from '@app/core';
import {
  Router,
  RouterEvent,
  NavigationEnd,
  ActivatedRoute,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user: User;
  tabs: any = [
    {
      id: 1,
      name: 'Home',
      active: true,
      link: '/home',
      icon: 'bi bi-house',
      activeIcon: 'bi bi-house',
      permissions: ['normalUser'],
      display: true,
    },
    {
      id: 2,
      name: 'Users',
      active: false,
      link: '/user',
      icon: 'bi bi-person',
      activeIcon: 'bi bi-person',
      permissions: ['normalUser'],
      display: true,
      child: {
        types: [
          {
            id: 1,
            name: 'Profile',
            link: '/users/profile',
            permissions: [],
          },
          {
            id: 2,
            name: 'Change Password',
            link: '/users/change-password',
            permissions:[]
          }
        ],
      },
    },
    {
      id: 3,
      name: 'Roles',
      active: false,
      link: '/roles',
      icon: 'bi bi-person-workspace',
      activeIcon: 'bi bi-person-workspace',
      permissions: ['admin'],
      display: true,
    },
    {
      id: 4,
      name: 'Settings',
      active: false,
      link: '/settings',
      icon: 'bi bi-gear-fill',
      activeIcon: 'bi bi-gear-fill',
      permissions: ['admin'],
      display: true,
    },
    {
      id: 9,
      name: 'Reports',
      active: false,
      link: '/reports',
      icon: 'bi bi-file-earmark-text-fill',
      activeIcon: 'bi bi-file-earmark-text-fill',
      permissions: ['admin'],
      display: true,
    },
  ];
  activeTab;
  activeChildTab;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private authenticationService: AuthenticationService) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    get isAdmin() {
        return this.user && this.user.role === Role.Admin;
    }

    ngOnInit() {
      if (!this.isAdmin) {
        this.tabs[0].child.types.splice(0,1);
      }
      this.setTab();
      this.setChildTab();
      this.router.events
        .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.setTab();
          this.setChildTab();
        });
      
    }
  
    setTab() {
      this.tabs.forEach((nav) => {
        if (nav.link === '/' + this.router.url.split('/')[1]) {
          nav.active = true;
          this.activeTab = nav;
        } else {
          nav.active = false;
        }
      });
    }
  
    setChildTab() {
      
      switch (this.activeTab.name) {
        case 'Users':
          if (!this.isAdmin) {
            this.activeChildTab =
            this.router.url.split('/')[2] === 'change-password'
              ? this.tabs[0].child.types[1]
                : this.tabs[0].child.types[0];
          }
          break;
      }
    }
  
    navigate(nav) {
      this.router.navigate([nav.link], {
        relativeTo: this.activatedRoute,
      });
    }

}
