import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'logo',
    template: `
        <div fxLayoutAlign="center center">
            <img src="../../../../assets/img/news-logo.png" alt="logo" class="logo" />
        </div>
    `,
    styles: [
        `
            .logo {
                height: 40px;
                object-fit: contain;
                padding-bottom: 10px;
            }
        `,
    ],
})
export class LogoComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
