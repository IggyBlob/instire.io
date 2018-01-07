import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginService} from '../_services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private login: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.login.validateLoginStatus()) {
            return true;
        }
        // not logged in
        this.router.navigateByUrl('/login');
        return false;
    }
}
