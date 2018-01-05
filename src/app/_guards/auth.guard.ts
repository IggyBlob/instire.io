import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = localStorage.getItem('token');
        if (token) {
            const payload = token.split('.');
            if (payload.length === 3) {
                try {
                    const payloadObj = JSON.parse(atob(payload[1]));
                    if (payloadObj && payloadObj.exp) {
                        if (Math.floor((new Date()).getTime() / 1000) < payloadObj.exp) {
                            // logged in and valid JWT in localStore
                            console.log('valid JWT');
                            console.log(payloadObj);
                            console.log(Math.floor((new Date()).getTime() / 1000));
                            console.log(payloadObj.exp);
                            return true;
                        }
                    }
                } catch (e) {}
            }
            // token invalid, so remove it
            localStorage.removeItem('token');
        }

        // not logged in
        this.router.navigateByUrl('/login');
        return false;
    }
}
