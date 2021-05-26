import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Auth } from '../../models/Auth';
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class AuthComponent implements OnInit {
    hide: boolean = true;
    users: Array<string> = ['admin', 'doctor', 'patient'];

    @Input()
    auth: Auth;

    @Input()
    type: string;

    constructor() {}

    ngOnInit(): void {}
}
