import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root',
})
export class ApexService {
    private _loaderSubject: Subject<Boolean> = new BehaviorSubject(false);
    private _blockSubject: Subject<Boolean> = new BehaviorSubject(false);
    private _sessionUserSubject: Subject<Object> = new BehaviorSubject(JSON.parse(localStorage.getItem('sessionUser')));
    private _titleSubject: Subject<string> = new BehaviorSubject<string>(null);
    private _roleSubject: Subject<string> = new BehaviorSubject<string>(null);
    private _isDarkTheme: Subject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private _domSanitizer: DomSanitizer, private zone: NgZone, private _http: HttpService) {}

    bypassURL(url: string) {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
    }

    showLoader(show: Boolean) {
        this.zone.run(() => {
            this._loaderSubject.next(show);
        });
    }

    blockScreen(show: Boolean) {
        this.zone.run(() => {
            this._blockSubject.next(show);
        });
    }

    loaderEvent(): Observable<Boolean> {
        return this._loaderSubject.asObservable();
    }

    blockEvent(): Observable<Boolean> {
        return this._blockSubject.asObservable();
    }

    updateTitle(title: string) {
        this._titleSubject.next(title);
    }

    get titleEvent(): Observable<any> {
        return this._titleSubject.asObservable();
    }

    get sessionUser(): Observable<any> {
        return this._sessionUserSubject.asObservable();
    }

    updateSessionUser(user: any) {
        this._sessionUserSubject.next(user);
    }

    get role(): Observable<any> {
        return this._roleSubject.asObservable();
    }

    updateRole(user: any) {
        this._roleSubject.next(user);
    }

    get isDarkTheme(): Observable<any> {
        return this._isDarkTheme.asObservable();
    }

    updateIsDarkTheme(data) {
        this._isDarkTheme.next(data);
    }
}
