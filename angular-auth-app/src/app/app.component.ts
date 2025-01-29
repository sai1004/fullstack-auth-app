import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfirmDialogComponent } from './shared/component/confirm-dialog.component';
import { ApexService } from './shared/service/apex.service';
import { AppService } from './shared/service/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    sessionUser: any = null;
    screenWidth: number;
    isShowNav: boolean = false;
    sessionUser$: Subscription;

    constructor(
        private _apexService: ApexService,
        private _appService: AppService,
        private router: Router,
        private dialog: MatDialog
    ) {
        this.setSideNavResponse();
        this.getSessionUser();
    }

    ngOnInit(): void {}

    setSideNavResponse(): void {
        this.screenWidth = window.innerWidth;
        window.onresize = () => {
            // set screenWidth on screen size change
            this.screenWidth = window.innerWidth;
        };
    }

    getSessionUser() {
        this._apexService.updateSessionUser(JSON.parse(sessionStorage.getItem('sessionUser')));

        this.sessionUser$ = this._apexService.sessionUser.subscribe((user: any) => {
            this.sessionUser = user;
        });
    }

    confirmLogout(): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.data = {
            title: 'Confirm Logout',
            message: 'Are you sure want to logout?',
        };
        const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe((result) => {
            if (result === true) {
                this.onLogout();
            }
        });
    }

    onLogout() {
        this._appService.clearJWT();
        sessionStorage.removeItem('sessionUser');
        this.router.navigateByUrl('auth/signin');
        this.sessionUser = null;
    }

    ngOnDestroy() {
        this.sessionUser$.unsubscribe();
    }
}
