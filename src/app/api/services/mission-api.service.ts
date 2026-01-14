import { Injectable } from '@angular/core';
import { Mission } from '../models';
import { Api } from './api';

@Injectable({
    providedIn: 'root'
})
export class MissionApiService {

    constructor(private api: Api) { }

    private basePath = "mission";

    public getAll() {
        const path = this.basePath + "/all"
        return this.api.get<Mission[]>(path);
    }

    public getById(id: number) {
        const path = this.basePath + "/" + id;
        return this.api.get<Mission>(path);
    }
}
