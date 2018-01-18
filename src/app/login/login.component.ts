import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginService} from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    instagramLogoutURL: string;
    isLogout: boolean;

    constructor(private route: ActivatedRoute, private router: Router, private login: LoginService) {
        // see https://stackoverflow.com/questions/10991753/instagram-api-user-logout
        this.instagramLogoutURL = 'https://www.instagram.com/accounts/logout/';
        this.isLogout = false;
    }

    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
                if (typeof params.token !== 'undefined' && params.token !== '') {
                    this.login.login(params.token);
                    this.router.navigateByUrl('/scoreboard');
                } else if (typeof params.target !== 'undefined' && params.target !== '') {
                    switch (params.target) {
                        case 'logout': this.isLogout = true;
                        // add additional param handlers
                    }
                }
                // add optional API error handling here
            });
    }

    public instagramRedirect() {
        this.login.loginRedirect();
    }

}
