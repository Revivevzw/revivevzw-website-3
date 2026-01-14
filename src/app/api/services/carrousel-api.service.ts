import { Injectable } from "@angular/core";
import { Carrousel } from "../models";
import { Api } from "./api";

@Injectable({
    providedIn: 'root'
})
export class CarrouselApiService {
    constructor(private api: Api) { }

    public getCarrouselItems() {
        return this.api.get<Carrousel[]>("carrousel");
    }
}