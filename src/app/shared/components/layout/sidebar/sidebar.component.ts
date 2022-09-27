import { Component, OnInit } from '@angular/core';
import { Role, User } from '@app/core/models';
import { AuthenticationService } from '@app/core';
import {
  Router,
  RouterEvent,
  NavigationEnd,
  ActivatedRoute
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  user: User;
  loading:boolean=true;
  tabs: any = [
    {
      id: 1,
      name: 'Home',
      active: false,
      link: '/home',
      icon: 'bi bi-file-earmark-text-fill',
      activeIcon: 'bi bi-file-earmark-text-fill',
      permissions: ['normalUser'],
      display: false,
    },
    {
      id: 2,
      name: 'Users',
      active: false,
      link: '/user',
      icon: 'bi bi-person',
      activeIcon: 'bi bi-person',
      permissions: ['normalUser', 'admin'],
      display: false,
      child: {
        types: [
          {
            id: 1,
            name: 'Profile',
            link: '/user/profile',
            permissions: [],
          },
          {
            id: 2,
            name: 'Change Password',
            link: '/user/change-password',
            permissions: []
          }
        ],
      },
    },
    {
      id: 3,
      name: 'Roles',
      active: false,
      link: '/role-list',
      icon: 'bi bi-person-workspace',
      activeIcon: 'bi bi-person-workspace',
      permissions: ['admin'],
      display: false,
    },
    {
      id: 4,
      name: 'Settings',
      active: false,
      link: '/settings',
      icon: 'bi bi-gear-fill',
      activeIcon: 'bi bi-gear-fill',
      permissions: ['admin'],
      display: false,
    },
    {
      id: 5,
      name: 'Reports',
      active: false,
      link: '/reports',
      icon: 'bi bi-file-earmark-text-fill',
      activeIcon: 'bi bi-file-earmark-text-fill',
      permissions: ['admin'],
      display: false,
    }
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
    this.loading=true;
    if(this.isAdmin){
      this.tabs.forEach((nav) => {
        nav.display= nav.name == "Users" ||  nav.name == "Roles" || nav.name == "Settings" || nav.name == "Reports" ?
        true:false;
      })
      this.tabs[0].active=false;
      this.tabs[1].active=true;
      this.loading=false;
    }else{
      this.tabs.forEach((nav) => {
        nav.display= nav.name == "Users" ||  nav.name == "Home" ?
        true:false;
      })
      this.tabs[0].active=true;
      this.tabs[1].active=false;
      this.loading=false;
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

    switch (this.activeTab?.name) {
      case 'Users':
       
          if(this.router.url.split('/')[2] === 'change-password'){
            this.activeChildTab = this.tabs[1].child.types[1]
            this.tabs[1].child.types[1].active=true;
            this.tabs[1].child.types[0].active=false;
          }
           else{
            this.activeChildTab = this.tabs[1].child.types[0];
            this.tabs[1].child.types[1].active=false;
            this.tabs[1].child.types[0].active=true;
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
