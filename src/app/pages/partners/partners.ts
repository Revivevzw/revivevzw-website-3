import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Sponsor } from '../../api/models/sponsor.model';
import { SponsorApiService } from '../../api/services/sponsor-api.service';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { InfoBlock } from '../../components/info-block/info-block';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-partners',
    standalone: true,
    imports: [CommonModule, Breadcrumbs, InfoBlock, TranslateModule],
    templateUrl: './partners.html',
    styleUrl: './partners.css',
})
export class Partners implements OnInit {
    private sponsorApiService = inject(SponsorApiService);
    sponsors$: Observable<Sponsor[]> | undefined;

    ngOnInit(): void {
        this.sponsors$ = this.sponsorApiService.getAll().pipe(
            map(sponsors => this.sponsorApiService.filterActiveSponsors(sponsors))
        );
    }

    ensureAbsoluteUrl(url: string | undefined): string | undefined {
        if (!url) return undefined;
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`;
    }
}
