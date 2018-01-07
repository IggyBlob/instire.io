import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

    loading: boolean;
    scoreCount: number;

    constructor(public userService: UserService) {
        this.loading = true;
        this.scoreCount = 0.0;
    }

    ngOnInit() {
        this.userService.fetchUser()
            .then(() => this.userService.fetchScore())
            .then(() => {
                this.loading = false;
                const interval = setInterval(() => {
                    this.scoreCount += 0.11;
                    if (this.scoreCount > this.userService.user.score) {
                        clearInterval(interval);
                        this.scoreCount = this.userService.user.score;
                    }
                }, 10);
            });

    }
}
