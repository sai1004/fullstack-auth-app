import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from './app.service';

@Injectable()
export class LoggedInAuthGuard implements CanActivate {
    constructor(private _appService: AppService, private router: Router) {}

    canActivate(): boolean {
        if (this.isAuthenticated()) {
            this.router.navigate(['dashboard/dashboard']);
            return false;
        }
        return true;
    }

    public isAuthenticated(): boolean {
        const token = this._appService.getJWT();
        return token && token != null && token != undefined;
    }
}
