import { Component, OnInit } from '@angular/core';
import { ApexService } from 'src/app/shared/service/apex.service';
import { Auth } from '../../../models/Auth';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-signin-page',
    templateUrl: './signin-page.component.html',
    styleUrls: ['./signin-page.component.scss'],
})
export class SigninPageComponent implements OnInit {
    auth: Auth;

    constructor(private _authService: AuthService, private _apexService: ApexService) {
        this.auth = new Auth();
    }

    ngOnInit(): void {}

    onLogin() {
        this._apexService.showLoader(true);
        this._authService.logIn(this.auth).subscribe((response: any) => {
            if (response.access_token) {
                console.log('response', response);

                this._authService.saveUser(response);
            }
        });
    }
}
