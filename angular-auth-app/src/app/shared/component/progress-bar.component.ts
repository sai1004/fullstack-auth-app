import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { ApexService } from '../service/apex.service';
import { AppService } from '../service/app.service';

@Component({
    selector: 'progress-bar',
    template: `
        <ng-template [ngIf]="showLoading == true">
            <div class="block-page" *ngIf="type == 'page'" style="z-index:9999999">
                <mat-progress-bar mode="indeterminate" color="accent"></mat-progress-bar>
                <section>
                    <div class="loader"></div>
                </section>
                <div class="loading__text">
                    <h1>Loading ...</h1>
                </div>
            </div>
        </ng-template>
        <ng-template [ngIf]="showBlock == true">
            <div class="block-page" *ngIf="type == 'page'" style="z-index:9999999">
                <mat-progress-bar mode="indeterminate" color="accent"></mat-progress-bar>
                <section>
                    <div class="loader"></div>
                </section>
                <div class="loading__text">
                    <h1>Loading ...</h1>
                </div>
            </div>
        </ng-template>
        <div class="loading" *ngIf="type == 'loading'">
            <mat-progress-bar mode="indeterminate" color="accent"></mat-progress-bar>
            <section>
                <div class="loader"></div>
            </section>
            <div class="loading__text">
                <h1>Loading ...</h1>
            </div>
        </div>
    `,
    styles: [
        `
            .loader {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 50px;
                height: 10px;
                background: #3498db;
                border-radius: 5px;
                -webkit-animation: load 1.8s ease-in-out infinite;
                animation: load 1.8s ease-in-out infinite;
            }
            .loader:before,
            .loader:after {
                position: absolute;
                display: block;
                content: '';
                -webkit-animation: load 1.8s ease-in-out infinite;
                animation: load 1.8s ease-in-out infinite;
                height: 10px;
                border-radius: 5px;
            }
            .loader:before {
                top: -20px;
                left: 10px;
                width: 40px;
                background: #ef4836;
            }
            .loader:after {
                bottom: -20px;
                width: 35px;
                background: #f5ab35;
            }

            @-webkit-keyframes load {
                0% {
                    transform: translateX(40px);
                }
                50% {
                    transform: translateX(-30px);
                }
                100% {
                    transform: translateX(40px);
                }
            }

            @keyframes load {
                0% {
                    transform: translateX(40px);
                }
                50% {
                    transform: translateX(-30px);
                }
                100% {
                    transform: translateX(40px);
                }
            }

            .loading__text {
                position: absolute;
                top: 56%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
            }
            .block-page {
                background-color: rgba(0, 0, 0, 0.8);
                top: 0px;
                bottom: 0px;
                left: 0px;
                right: 0px;
                position: fixed;
                height: 100vh;
                width: 100vw;
                z-index: 999;
            }
        `,
    ],
})
export class ProgressBarComponent {
    @Input()
    type: string = 'page';
    showLoading: any = true;
    showBlock: any = false;

    constructor(private _apexService: ApexService) {
        this._apexService.loaderEvent().subscribe((result: boolean) => {
            // console.log('loader :' + result);
            setTimeout(() => {
                this.showLoading = result;
            }, 100);
        });

        this._apexService.blockEvent().subscribe((result: boolean) => {
            // console.log('loader :' + result);
            setTimeout(() => {
                this.showBlock = result;
            }, 100);
        });
    }
}
