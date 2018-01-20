import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

    constructor(private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle('instire.io \u2014 Welcome');
    }

}
