import { Component, OnInit } from '@angular/core';
import {LoginService} from '../_services/login.service';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(public loginService: LoginService, public userService: UserService, private router: Router) { }

    ngOnInit() {
    }

    public logout() {
        this.loginService.logout();
        this.router.navigateByUrl('/login');
    }

}
