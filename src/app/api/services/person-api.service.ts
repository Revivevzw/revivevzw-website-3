import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable({
    providedIn: 'root'
})
export class PersonApiService {

    constructor(
        private api: Api
    ) { }

    private path = "person";

    public subscribe(email: string) {
        const path = this.path + '/subscribe';
        return this.api.post(path, { email: email });
    }
}
