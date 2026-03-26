import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SettingApiService } from '../../api/services/setting-api.service';
import { SplitContentCard } from "../../components/split-content-card/split-content-card";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { InfoBlock } from "../../components/info-block/info-block";
import { LocalizePipe } from "../../pipes/localize.pipe";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-team',
    imports: [SplitContentCard, Breadcrumbs, InfoBlock, LocalizePipe, TranslateModule],
    templateUrl: './team.html',
    styleUrl: './team.css',
})
export class Team {
    private settingApi = inject(SettingApiService);

    public organigram = toSignal(this.settingApi.getOrganigram());
}
