import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './_guards/auth.guard';

import {JwtInterceptor } from './_helpers/jwt.interceptor';
import {UserService} from './_services/user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginService} from './_services/login.service';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'scoreboard',
        component: ScoreboardComponent,
        canActivate: [AuthGuard]
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
        HeaderComponent,
        LoginComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // for debugging only
        ),
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [
        AuthGuard,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        LoginService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
