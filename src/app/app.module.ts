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
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'scoreboard',
        component: ScoreboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'about/:subroute',
        component: AboutComponent
    },
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
        LoginComponent,
        AboutComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // for debugging only
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
