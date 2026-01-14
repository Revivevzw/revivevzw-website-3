import { Injectable } from '@angular/core';
import { NewsItem } from '../models/index';
import { Api } from './api';

@Injectable({
    providedIn: 'root'
})
export class NewsItemApiService {

    constructor(
        private api: Api
    ) { }

    private path = "splash";

    public getAll = () => {
        return this.api.get<Array<NewsItem>>(this.path);
    }
}