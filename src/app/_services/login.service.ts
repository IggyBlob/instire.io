import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    loggedIn: boolean;

    constructor() {
        this.validateLoginStatus();
    }

    public loginRedirect() {
        // dead simple POJS redirect ;)
        window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id='
            + '036b5eb66e74476e9e2cf0617b7f113e' + '&redirect_uri='
            + 'http://<API HOST>:3000/api/auth' + '&response_type=code';
    }

    public login(token: string) {
        // optionally run validateToken here to ensure that a valid token was passed from the API
        // not really necessary since the AuthGuard is invoked upon routing to a secured area and will call validateToken anyway
        localStorage.setItem('token', token);
        this.loggedIn = true;
    }

    public logout() {
        localStorage.removeItem('token');
        this.loggedIn = false;
    }

    public validateLoginStatus() {
        const token = localStorage.getItem('token');
        if (this.validateToken(token)) {
            this.loggedIn = true;
            return true;
        }
        // invalid token, log out
        this.logout();
        return false;
    }

    // validateToken checks if the passed JWT's "exp" claim has not expired.
    // It does NOT check if the token has been manipulated since the JWT secret never leaves the API server.
    private validateToken(token: string) {
        if (token) {
            const payload = token.split('.');
            if (payload.length === 3) {
                try {
                    const payloadObj = JSON.parse(atob(payload[1]));
                    if (payloadObj && payloadObj.exp) {
                        if (Math.floor((new Date()).getTime() / 1000) < payloadObj.exp) {
                            return true;
                        }
                    }
                } catch (e) {}
            }
        }
        return false;
    }

}
