import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginService} from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private login: LoginService) { }

    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
                if (typeof params.token !== 'undefined' && params.token !== '') {
                    this.login.login(params.token);
                    this.router.navigateByUrl('/scoreboard');
                }
                // add optional API error handling here
            });
    }

    public instagramRedirect() {
        this.login.loginRedirect();
    }

}
