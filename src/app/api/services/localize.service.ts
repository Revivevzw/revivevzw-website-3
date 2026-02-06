import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Localization } from '../models/index';

@Injectable({
    providedIn: 'root'
})
export class LocalizeService {

    constructor(private translateService: TranslateService) { }

    public localizeData = (localization: Localization): string => {
        const language = this.translateService.getCurrentLang().slice(0, 2);
        return (localization as any)[language] || localization.nl;
    }
}