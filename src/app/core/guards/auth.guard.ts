import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@app/core/services';
import { Observable, Observer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        debugger;
        const user = this.authenticationService.userValue;
        if (user) {
            return new Observable<boolean>((observer) => {
                // check if route is restricted by role
                if (route.data.roles == '') {
                    this.router.navigate(['/']);
                    observer.next(true);
                    observer.complete();
                    // role not authorised so redirect to home page
                   
                    // return false;
                }
                observer.next(true);
                observer.complete();
                // authorised so return true
                // return true;

            });
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}