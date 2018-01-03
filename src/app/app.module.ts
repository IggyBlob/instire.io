import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
    {
        path: 'scoreboard',
        component: ScoreboardComponent
    },
    /*
    {
        path: 'about',
        component: AboutComponent,
        data: { title: 'About'}
    },
    {
        path: 'privacy',
        component: PrivacyComponent,
        data: { title: 'Privacy'}
    },
    {
        path: 'imprint',
        component: ImprintComponent,
        data: { title: 'Imprint'}
    },
    {
        path: 'frequently-asked-questions',
        component: FAQComponent,
        data: { title: 'FAQ'}
    },
    */
    {
        path: '',
        component: StartComponent,
        pathMatch: 'full'
    },
    /*
    {
        path: '**',
        component: PageNotFoundComponent
    }
    */

];

@NgModule({
    declarations: [
        AppComponent,
        StartComponent,
        ScoreboardComponent,
        HeaderComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // for debugging only
        ),
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
