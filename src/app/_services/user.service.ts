import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AverageData, User, UserData, UserMediaData, UserMetricsData } from '../_models/user';

@Injectable()
export class UserService {

    apiUrl = 'http://api.radiochecker.com:3000/api';
    user: User;
    averageScore: number;
    overallUserCount: number;

    constructor(private http: HttpClient) {
        this.user = new User;
        this.user.metrics = new UserMetricsData;
    }

    public fetchUser() {
        const promise = new Promise((resolve, reject) => {
            this.http.get<UserData>(`${this.apiUrl}/user`)
                .toPromise()
                .then(
                    res => {
                    this.user.details = res.user;
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
            this.http.get<UserMetricsData>(`${this.apiUrl}/user/score`)
                .toPromise()
                .then(
                    res => {
                        console.log(res.raw);
                        this.user.metrics.raw = res.raw;
                        this.user.metrics.compiled = res.compiled;
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
