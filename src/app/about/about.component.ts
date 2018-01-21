import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

    subroute: string;
    private sub: any;

    constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.subroute = params['subroute'];
            switch (this.subroute) {
                case 'wtf':     this.titleService.setTitle('instire.io \u2014 About'); break;
                case 'faq':     this.titleService.setTitle('instire.io \u2014 FAQ'); break;
                case 'legal':   this.titleService.setTitle('instire.io \u2014 Legal Information'); break;
                case 'privacy': this.titleService.setTitle('instire.io \u2014 Privacy Policy'); break;
                default: this.router.navigateByUrl('/xyz');
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public gaOptOut() {
        const gaProperty = 'UA-XXXXXXX-X';
        const disableStr = 'ga-disable-' + gaProperty;
        if (document.cookie.indexOf(disableStr + '=true') > -1) {
            window[disableStr] = true;
        }
        document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        window[disableStr] = true;
    }
}
