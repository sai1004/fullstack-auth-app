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
                    <div class="loader loader-18">
                        <div class="css-star star1"></div>
                        <div class="css-star star2"></div>
                        <div class="css-star star3"></div>
                        <div class="css-star star4"></div>
                        <div class="css-star star5"></div>
                        <div class="css-star star6"></div>
                        <div class="css-star star7"></div>
                        <div class="css-star star8"></div>
                    </div>
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
                    <div class="loader loader-18">
                        <div class="css-star star1"></div>
                        <div class="css-star star2"></div>
                        <div class="css-star star3"></div>
                        <div class="css-star star4"></div>
                        <div class="css-star star5"></div>
                        <div class="css-star star6"></div>
                        <div class="css-star star7"></div>
                        <div class="css-star star8"></div>
                    </div>
                </section>
                <div class="loading__text">
                    <h1>Loading ...</h1>
                </div>
            </div>
        </ng-template>
        <div class="loading" *ngIf="type == 'loading'">
            <mat-progress-bar mode="indeterminate" color="accent"></mat-progress-bar>
            <section>
                <div class="loader loader-18">
                    <div class="css-star star1"></div>
                    <div class="css-star star2"></div>
                    <div class="css-star star3"></div>
                    <div class="css-star star4"></div>
                    <div class="css-star star5"></div>
                    <div class="css-star star6"></div>
                    <div class="css-star star7"></div>
                    <div class="css-star star8"></div>
                </div>
            </section>
            <div class="loading__text">
                <h1>Loading ...</h1>
            </div>
        </div>
    `,
    styles: [
        `
            .loading__text {
                position: absolute;
                top: 60%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
            }
            section {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            .loader {
                position: relative;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                margin: 75px;
                display: inline-block;
                vertical-align: middle;
            }

            .loader-star {
                position: absolute;
                top: calc(50% - 12px);
            }

            /*CSS-STAR*/

            .css-star {
                margin: 10px 0;
                position: relative;
                display: block;
                width: 0px;
                height: 0px;
                border-right: 26px solid transparent;
                border-bottom: 23px solid #e11a2b;
                border-left: 23px solid transparent;
                -webkit-transform: rotate(180deg);
                -ms-transform: rotate(180deg);
                transform: rotate(180deg);
            }

            .css-star:before {
                border-bottom: 18px solid #e11a2b;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                position: absolute;
                height: 0;
                width: 0;
                top: -9px;
                left: -16px;
                display: block;
                content: '';
                -webkit-transform: rotate(-35deg);
                -moz-transform: rotate(-35deg);
                -ms-transform: rotate(-35deg);
                -o-transform: rotate(-35deg);
            }

            .css-star:after {
                position: absolute;
                display: block;
                top: 2px;
                left: -26px;
                width: 0px;
                height: 0px;
                border-right: 25px solid transparent;
                border-bottom: 22px solid #e11a2b;
                border-left: 27px solid transparent;
                -webkit-transform: rotate(-70deg);
                -moz-transform: rotate(-70deg);
                -ms-transform: rotate(-70deg);
                -o-transform: rotate(-70deg);
                content: '';
            }

            /*LOADER-18*/

            .loader-18 .css-star {
                position: absolute;
                -webkit-transform: rotate(180deg) scale(0.5);
                -ms-transform: rotate(180deg) scale(0.5);
                transform: rotate(180deg) scale(0.5);
                opacity: 0.4;
            }

            .loader-18 .css-star,
            .loader-18 .css-star:before,
            .loader-18 .css-star:after {
                border-bottom-color: #00e676;
            }

            .loader-18 .star1 {
                top: -20px;
                left: 5px;
                -webkit-animation: star-crazyness 1s 0.125s ease infinite;
                animation: star-crazyness 1s 0.125s ease infinite;
            }

            .loader-18 .star2 {
                left: 25px;
                top: -10px;
                -webkit-animation: star-crazyness 1s 0.3s ease infinite;
                animation: star-crazyness 1s 0.3s ease infinite;
            }

            .loader-18 .star3 {
                left: 35px;
                top: 10px;
                -webkit-animation: star-crazyness 1s 0.425s ease infinite;
                animation: star-crazyness 1s 0.425s ease infinite;
            }

            .loader-18 .star4 {
                top: 30px;
                left: 27px;
                -webkit-animation: star-crazyness 1s 0.54s ease infinite;
                animation: star-crazyness 1s 0.54s ease infinite;
            }

            .loader-18 .star5 {
                top: 40px;
                left: 5px;
                -webkit-animation: star-crazyness 1s 0.665s ease infinite;
                animation: star-crazyness 1s 0.665s ease infinite;
            }

            .loader-18 .star6 {
                top: 30px;
                left: -15px;
                -webkit-animation: star-crazyness 1s 0.79s ease infinite;
                animation: star-crazyness 1s 0.79s ease infinite;
            }

            .loader-18 .star7 {
                top: 10px;
                left: -25px;
                -webkit-animation: star-crazyness 1s 0.9s ease infinite;
                animation: star-crazyness 1s 0.9s ease infinite;
            }

            .loader-18 .star8 {
                top: -10px;
                left: -15px;
                -webkit-animation: star-crazyness 1s 1s ease infinite;
                animation: star-crazyness 1s 1s ease infinite;
            }

            /* ----------------     KEYFRAMES    ----------------- */

            @keyframes star-crazyness {
                0% {
                    opacity: 0.4;
                    -webkit-transform: rotate(180deg) translate(0px, 0) scale(0.6);
                    transform: rotate(180deg) translate(0px, 0) scale(0.6);
                }
                25% {
                    opacity: 0.4;
                    -webkit-transform: rotate(180deg) translate(0, 0) scale(0.2);
                    transform: rotate(180deg) translate(0, 0) scale(0.2);
                }
                50% {
                    opacity: 0.7;
                    -webkit-transform: rotate(180deg) translate(5px, 5px) scale(0.4);
                    transform: rotate(180deg) translate(5px, 5px) scale(0.4);
                }
                75% {
                    opacity: 0.4;
                    -webkit-transform: rotate(180deg) translate(0, 0) scale(0.6);
                    transform: rotate(180deg) translate(0, 0) scale(0.6);
                }
                80% {
                    opacity: 1;
                    -webkit-transform: rotate(180deg) translate(5px, 0) scale(0.1);
                    transform: rotate(180deg) translate(5px, 0) scale(0.1);
                }
                100% {
                    opacity: 0.4;
                    -webkit-transform: rotate(180deg) translate(0, 0) scale(0.6);
                    transform: rotate(180deg) translate(0, 0) scale(0.6);
                }
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
