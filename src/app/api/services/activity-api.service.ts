import { Injectable } from '@angular/core';
import { Activity, Localization } from '../models';
import { Api } from './api';
import { KeyValue } from '@angular/common';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ActivityApiService {

    constructor(private api: Api) { }

    public getUpcoming = () => {
        return this.api.get<Array<Activity>>("activity/upcoming")
            .pipe(map(x => x.filter(y => y.type != 35)));
    }

    public getPast() {
        return this.api.get<Activity[]>("activity/past")
            .pipe(map(x => x.filter(y => y.type != 35)));
    }

    public get = (id: number) => {
        return this.api.get<Activity>("activity/" + id);
    }

    public getTypes = () => {
        return <Array<KeyValue<number, Localization>>>[
            { key: 36, value: { nl: "Fundraiser", fr: "Fundraiser", en: "Fundraiser" } },
            { key: 35, value: { nl: "Missie", fr: "Opération", en: "Operation" } },
            { key: 107, value: { nl: "Scouting", fr: "Repérage", en: "Scouting" } },
        ];
    }
}