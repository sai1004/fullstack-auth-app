import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/Auth';
import { ApexService } from 'src/app/shared/service/apex.service';
import { AppService } from 'src/app/shared/service/app.service';
import { HttpService } from 'src/app/shared/service/http.service';

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

    logIn(data: any) {
        let reqData = {
            email: data.email,

            password: data.password,
        };
        return this._http.post(this.auth_url + '/signin', reqData, true);
    }

    saveUser(data: any, user: any) {
        this.route.navigateByUrl('/dashboard/dashboard');
    }
}
