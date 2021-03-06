import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {style, trigger, state, transition, animate, query, stagger, keyframes} from '@angular/animations';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-scoreboard',
    templateUrl: './scoreboard.component.html',
    styleUrls: ['./scoreboard.component.css'],
    animations: [
        trigger('enterAnimation', [
            transition(':enter', [
                style({opacity: 0}),
                animate('1000ms', style({opacity: 1}))
            ]),

            transition(':leave', [
                style({opacity: 1}),
                animate('10ms', style({transform: 'translateX(100%)', opacity: 0}))
            ])
        ]),
        trigger('imageAnimation', [
            transition('* => *', [
                animate('2000ms', keyframes([
                    style({transform: 'rotateZ(0) rotateY(-270deg)',        offset: 0}),
                    style({transform: 'rotateZ(180deg) rotateY(0)', offset: 0.5}),
                    style({transform: 'rotateZ(360deg) rotateY(90deg)',    offset: 1.0})
                ]))
            ]
        )])
    ]
})
export class ScoreboardComponent implements OnInit {

    // loadingIndicator fields
    mediaFetched: boolean;
    currMediaImg: string;
    currMediaIdx: number;
    stateChange:  string;
    imageCounter: number;
    currMessage:  string;

    // scoreCard fields
    displayScoreCard: boolean;
    scoreFetched: boolean;
    scoreCount: number;
    performanceRatio: number;


    constructor(public userService: UserService, private titleService: Title) {
        // loadingIndicator fields
        this.mediaFetched = false;
        this.currMediaImg = '../../../assets/img/transparent.svg';
        this.currMediaIdx = 1;
        this.imageCounter = 0;
        this.currMessage = 'Loading ...';

        // scoreCard fields
        this.displayScoreCard = false;
        this.scoreFetched = false;
        this.scoreCount = 0.0;
        this.performanceRatio = 0.0;
    }

    ngOnInit() {
        this.userService.fetchUser()
            .then(() => this.userService.fetchLatestMedia())
            .then(() => {
                this.titleService.setTitle('instire.io \u2014 Scoreboard for @' + this.userService.user.details.username);
                this.mediaFetched = true;
                if (this.userService.user.media.length > 0) {
                    this.currMediaImg = this.userService.user.media[0].src;
                } else {
                    this.currMediaImg = '../../../assets/img/transparent.svg';
                }
            })
            .then(() => this.userService.fetchScore())
            .then(() => {
                this.scoreFetched = true;
                if (this.userService.user.metrics.compiled.usersAll !== 0) {
                    this.performanceRatio =
                        this.userService.user.metrics.compiled.usersLower /
                        this.userService.user.metrics.compiled.usersAll * 100;
                }
            });
    }

    public nextImage() {
        this.currMediaIdx++;
        if ((this.currMediaIdx >= this.userService.user.media.length) && this.userService.user.media.length !== 0) {
            this.currMediaIdx = 0;
        }

        switch (this.imageCounter) {
            case 0: this.currMessage = 'Crunching data ...'; break;
            case 2: this.currMessage = 'Checking out your vacay pics ...'; break;
            case 4: this.currMessage = 'Solving climate change ...'; break;
            case 6: this.currMessage = 'Dividing by zero ...'; break;
            case 8:
                if (this.scoreFetched) { this.displayScoreCard = true; this.animateCountUp(); return; }
                this.imageCounter--;
        }

        if (this.userService.user.media.length > 0) {
            this.currMediaImg = this.userService.user.media[this.currMediaIdx].src;
        } else {
            this.currMediaImg = '../../../assets/img/transparent.svg';
        }

        this.stateChange = '' + this.currMediaIdx; // keep firing state changes so that the image wheel keeps spinning
        this.imageCounter++;
    }

    private animateCountUp() {
        const interval = setInterval(() => {
            this.scoreCount += 0.11;
            if (this.scoreCount > this.userService.user.metrics.compiled.score) {
                clearInterval(interval);
                this.scoreCount = this.userService.user.metrics.compiled.score;
            }
        }, 20);
    }
}
