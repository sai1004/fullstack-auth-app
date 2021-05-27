import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-confirm-dialog',
    template: `
        <h1 mat-dialog-title>{{ data.title }}</h1>
        <div mat-dialog-content>
            {{ data.message }}
        </div>
        <div class="top-gap">
            <div fxLayout="row" fxLayoutAlign="space-between center">
                <div>
                    <button mat-raised-button color="primary" class="save" (click)="save(true)">Confirm</button>
                </div>
                <div>
                    <button mat-raised-button color="warn" class="cancel" (click)="close(false)">Cancel</button>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .top-gap {
                margin-top: 40px;
            }
        `,
    ],
})
export class ConfirmDialogComponent implements OnInit {
    title: string;
    message: string;

    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit() {}

    save(value) {
        this.dialogRef.close(value);
    }

    close(value) {
        this.dialogRef.close(value);
    }
}
