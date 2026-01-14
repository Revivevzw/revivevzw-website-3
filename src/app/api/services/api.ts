import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class Api {
    constructor(
        private http: HttpClient,
    ) { }

    private getUrl(path: string) {
        return environment.revivevzwApiUrl + path;
    }

    public get<T>(path: string) {
        const url = this.getUrl(path);
        return this.http.get<T>(url);
    }

    public post(path: string, object: any) {
        var url = this.getUrl(path);
        return this.http.post(url, object);
    }
}
