import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/Auth';
import { ApexService } from 'src/app/shared/service/apex.service';
import { AppService } from 'src/app/shared/service/app.service';
import { HttpService } from 'src/app/shared/service/http.service';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private auth_url: string = '/auth';
    auth: Auth;

    constructor(
        private _http: HttpService,
        private _apexService: ApexService,
        private route: Router,
        private _appService: AppService
    ) {}

    logIn(credentials: any) {
        let reqData = {
            email: credentials.email,
            password: credentials.password,
        };
        return this._http.post(this.auth_url + '/signin', reqData, true);
    }

    saveUser(data: any) {
        if (data.access_token) {
            // console.log('data.decode', jwt_decode(data.accessToken));

            // data.decode = jwt_decode(data.accessToken);

            this._appService.setJWT(data.access_token);

            sessionStorage.setItem('sessionUser', JSON.stringify(data.identity));
            this._apexService.updateSessionUser(data.identity);
            this.route.navigateByUrl('/dashboard/dashboard');
        }
    }

    signup(newUser) {
        return this._http.post(this.auth_url + '/signup', { data: newUser }, true);
    }
}
