import { Injectable, NgZone } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmDialogComponent } from '../component/confirm-dialog.component';

@Injectable()
export class AppService {
    private pid: string = 'WEB';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private _domSanitizer: DomSanitizer,
        private _snackBarService: MatSnackBar,
        private zone: NgZone,
        private dialog: MatDialog
    ) {}

    showMessage(message: string, error: any) {
        this.zone.run(() => {
            this._snackBarService.open(message, 'close', {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'right',
                panelClass: error == true ? 'snack-error' : 'snack-success',
            });
        });
    }

    setJWT(val: any) {
        let value = val;
        sessionStorage.setItem(`${this.pid}-JWT-KEY`, value);
    }

    getJWT() {
        return sessionStorage.getItem(`${this.pid}-JWT-KEY`);
    }

    clearJWT() {
        sessionStorage.removeItem(`${this.pid}-JWT-KEY`);
    }

    setRefreshToken(val: any) {
        let value = val;
        sessionStorage.setItem(`Refresh-Token`, value);
    }

    getRefreshToken() {
        return sessionStorage.getItem(`Refresh-Token`);
    }

    clearRefreshToken() {
        sessionStorage.removeItem(`Refresh-Token`);
    }
}
