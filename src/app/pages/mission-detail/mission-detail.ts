import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MissionApiService } from '../../api/services/mission-api.service';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { PageHero } from '../../components/page-hero/page-hero';
import { LocalizePipe } from '../../pipes/localize.pipe';
import { switchMap } from 'rxjs';

@Component({
    selector: 'app-mission-detail',
    standalone: true,
    imports: [CommonModule, Breadcrumbs, PageHero, LocalizePipe],
    templateUrl: './mission-detail.html',
    styleUrl: './mission-detail.css',
})
export class MissionDetail {
    private route = inject(ActivatedRoute);
    private missionApi = inject(MissionApiService);

    // Use the route param to fetch the mission
    public mission = toSignal(
        this.route.paramMap.pipe(
            switchMap((params) => {
                const id = Number(params.get('id'));
                return this.missionApi.getById(id);
            })
        )
    );
}
