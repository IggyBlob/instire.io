import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
                if (typeof params.token !== 'undefined' && params.token !== '') {
                    localStorage.setItem('token', params.token);
                    this.router.navigateByUrl('/scoreboard');
                }
                // add optional API error handling here
            });
    }

    public instagramRedirect() {
        // dead simple POJS redirect ;)
        window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id='
            + '036b5eb66e74476e9e2cf0617b7f113e' + '&redirect_uri='
            + 'http://localhost:3000/api/auth' + '&response_type=code';
    }

}
