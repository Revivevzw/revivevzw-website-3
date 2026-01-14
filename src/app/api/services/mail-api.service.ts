import { Injectable } from '@angular/core';
import { Mail } from '../models';
import { Api } from './api';

@Injectable({
    providedIn: 'root'
})
export class MailApiService {

    constructor(private api: Api) { }

    public send(mail: Mail) {
        let url = "email/send";
        return this.api.post(url, mail);
    }
}
