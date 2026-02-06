import { Component, inject } from '@angular/core';
import { InfoBlock } from '../../components/info-block/info-block';
import { SplitContentCard } from '../../components/split-content-card/split-content-card';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { SettingApiService } from '../../api/services/setting-api.service';
import { LocalizePipe } from '../../pipes/localize.pipe';

@Component({
    selector: 'app-about',
    imports: [InfoBlock, SplitContentCard, Breadcrumbs, RouterLink, LocalizePipe],
    templateUrl: './about.html',
    styleUrl: './about.css',
})
export class About {
    private settingApi = inject(SettingApiService);

    public organigram = toSignal(this.settingApi.getOrganigram());
}
