import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/Auth';
import { ApexService } from 'src/app/shared/service/apex.service';
import { AppService } from 'src/app/shared/service/app.service';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
    auth: Auth;

    constructor(
        private _authService: AuthService,
        private _apexService: ApexService,
        private _appService: AppService,
        private router: Router
    ) {
        this.auth = new Auth();
    }

    ngOnInit(): void {}

    onSignUp() {
        this._authService.signup(this.auth).subscribe((response: any) => {
            if (response.access_token) {
                console.log('res', response);
                this._appService.showMessage(' New Account Signup Successful ', false);
                this.router.navigateByUrl('/auth/signin');
            }
        });
    }
}
