import { Pipe, PipeTransform } from "@angular/core";
import { LocalizeService } from "../api/services/localize.service";
import { Localization } from "../api/models";


@Pipe({ name: 'localize', pure: false })
export class LocalizePipe implements PipeTransform {
    constructor(private localize: LocalizeService) { }
    transform(value: Localization): string {
        return this.localize.localizeData(value);
    }
}