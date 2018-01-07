import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AverageData, User, UserData, UserMediaData, UserScoreData} from '../_models/user';

@Injectable()
export class UserService {

    apiUrl = 'http://localhost:3000/api';
    user: User;
    averageScore: number;
    overallUserCount: number;

    constructor(private http: HttpClient) {
        this.user = new User;
    }

    public fetchUser() {
        const promise = new Promise((resolve, reject) => {
            this.http.get<UserData>(`${this.apiUrl}/user`)
                .toPromise()
                .then(
                    res => {
                    this.user.details = res.user;
                    console.log(this.user);
                    resolve();
                }, err => {
                    reject(err);
                });
        });
        return promise;
    }

    public fetchLatestMedia() {
        const promise = new Promise((resolve, reject) => {
            this.http.get<UserMediaData>(`${this.apiUrl}/user/media`)
                .toPromise()
                .then(
                    res => {
                        this.user.media = res.media;
                        resolve();
                    }, err => {
                        reject(err);
                    });
        });
        return promise;
    }

    public fetchScore() {
        const promise = new Promise((resolve, reject) => {
            this.http.get<UserScoreData>(`${this.apiUrl}/user/score`)
                .toPromise()
                .then(
                    res => {
                        this.user.score = res.score;
                        resolve();
                    }, err => {
                        reject(err);
                    });
        });
        return promise;
    }

    public fetchAverageScore() {
        const promise = new Promise((resolve, reject) => {
            this.http.get<AverageData>(`${this.apiUrl}/average`)
                .toPromise()
                .then(
                    res => {
                        this.averageScore = res.average;
                        this.overallUserCount = res.count;
                        resolve();
                    }, err => {
                        reject(err);
                    });
        });
        return promise;
    }
}
