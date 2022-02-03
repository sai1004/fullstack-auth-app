import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpService } from 'src/app/shared/service/http.service';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    private contacts_url = '/contacts';

    constructor(private _http: HttpService) {}

    getContactsList() {
        return this._http.get(`${this.contacts_url}/list`);
    }

    saveContact(data: any) {
        return this._http.put(`${this.contacts_url}/create`, data);
    }

    deleteContact(id: any) {
        return this._http.delete(`${this.contacts_url}/${id}`, true);
    }

    getContactById(id: any) {
        return this._http.get(`${this.contacts_url}/${id}`, true);
    }
}
