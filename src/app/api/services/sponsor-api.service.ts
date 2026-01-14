import { Injectable } from '@angular/core';
import { Sponsor } from '../models/index';
import { Api } from './api';

@Injectable({
    providedIn: 'root'
})
export class SponsorApiService {

    constructor(
        private api: Api
    ) { }

    private path = "sponsor";

    public getAll = () => {
        return this.api.get<Array<Sponsor>>(this.path + '/all');
    }

    public filterActiveSponsors = (sponsors: Array<Sponsor>) => {
        return sponsors.filter(s => !s.endDate || new Date(s.endDate) <= new Date()).sort((a, b) => b.amount - a.amount)
    }
}