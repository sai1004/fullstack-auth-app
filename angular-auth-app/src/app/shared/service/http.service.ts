import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Props } from '../utils/props';
import { AppService } from './app.service';
import { ApexService } from './apex.service';

@Injectable()
export class HttpService {
    private host = Props.API_END_POINT;
    private altHost = Props.API_END_POINT;

    constructor(private http: HttpClient, private appService: AppService) { }

    get(url: string, loader?: boolean) {
        url = this.host + url;
        return this.http.get(url);
    }

    post(url: string, data: any, loader?: boolean) {
        url = this.host + url;
        // console.log('Host', this.host);
        return this.http.post(url, data);
    }

    put(url: string, data: any, loader?: boolean) {
        url = this.host + url;
        // console.log('Host', this.host);
        return this.http.put(url, data);
    }

    delete(url: string, loader?: boolean) {
        url = this.host + url;
        return this.http.delete(url);
    }

    patch(url: string, data: any, loader?: boolean) {
        url = this.host + url;
        // console.log('Host', this.host);
        return this.http.patch(url, data);
    }

    getById(url: string, Id: any, loader?: boolean) {
        url = this.host + url;
        return this.http.get(url + Id);
    }

    getJsonData(url: string) {
        return this.http.get(url);
    }

    formData(_formData: FormData, loader?: boolean) {
        let url = 'http://localhost:5000/api/image/upload';
        return this.http.post(url, _formData);
    }
}
