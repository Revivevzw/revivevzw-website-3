import { Injectable } from "@angular/core";
import { Setting } from "../models/setting.model";
import { Api } from "./api";

@Injectable({
    providedIn: 'root'
})

export class SettingApiService {

    constructor(private api: Api) { }

    private basePath = "setting";

    public getOrganigram() {
        const path = this.basePath + "/organigram";
        return this.api.get<Setting>(path);
    }

    public getArticlesOfAssociation() {
        const path = this.basePath + "/articles-of-association";
        return this.api.get<Setting>(path);
    }
}