import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

    loading: boolean;

    constructor(public userService: UserService) {
        this.loading = true;
    }

    ngOnInit() {

        this.userService.fetchUser()
            .then(() => this.userService.fetchScore())
            .then(() => this.loading = false);

        //this.userService.fetchScore();
    }

}
