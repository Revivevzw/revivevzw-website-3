import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MissionApiService } from '../../api/services/mission-api.service';
import { Mission } from '../../api/models/mission.model';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { LocalizePipe } from "../../pipes/localize.pipe";
import { ActivityCard } from '../../components/activity-card/activity-card';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizeService } from '../../api/services/localize.service';

export type SortOption = 'newest' | 'oldest' | 'alpha-asc' | 'alpha-desc';

@Component({
    selector: 'app-missions',
    standalone: true,
    imports: [CommonModule, Breadcrumbs, LocalizePipe, ActivityCard, TranslateModule],
    templateUrl: './missions.html',
    styleUrl: './missions.css',
})
export class Missions implements OnInit {
    private missionApi = inject(MissionApiService);
    private localizeService = inject(LocalizeService);
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    // Reactive State using Signals
    activeTab = signal<'future' | 'past'>('future');
    sortBy = signal<SortOption>('newest');

    // toSignal handles the subscription and provides a reactive Signal of the data
    private allMissions = toSignal(this.missionApi.getAll(), { initialValue: [] as Mission[] });

    // Computed state automatically updates when activeTab, sortBy or allMissions changes
    filteredMissions = computed(() => {
        const tab = this.activeTab();
        const missions = this.allMissions();
        const sort = this.sortBy();

        const filtered = missions.filter(m =>
            tab === 'future' ? m.type === 0 : m.type === 2
        );

        return [...filtered].sort((a, b) => {
            switch (sort) {
                case 'newest': {
                    const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
                    const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
                    return dateB - dateA;
                }
                case 'oldest': {
                    const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
                    const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
                    return dateA - dateB;
                }
                case 'alpha-asc': {
                    const nameA = this.localizeService.localizeData(a.name).toLowerCase();
                    const nameB = this.localizeService.localizeData(b.name).toLowerCase();
                    return nameA.localeCompare(nameB);
                }
                case 'alpha-desc': {
                    const nameA = this.localizeService.localizeData(a.name).toLowerCase();
                    const nameB = this.localizeService.localizeData(b.name).toLowerCase();
                    return nameB.localeCompare(nameA);
                }
                default:
                    return 0;
            }
        });
    });

    // Simple loading flag based on whether we have data yet
    // Note: In a real app, you might want a more explicit loading state from the API service
    loading = computed(() => this.allMissions().length === 0);

    ngOnInit() {
        // Sync the Signal state with URL query parameters
        this.route.queryParams.subscribe(params => {
            const type = params['type'];
            if (type === 'past') {
                this.activeTab.set('past');
            } else {
                this.activeTab.set('future');
            }

            const sort = params['sort'] as SortOption;
            if (sort && ['newest', 'oldest', 'alpha-asc', 'alpha-desc'].includes(sort)) {
                this.sortBy.set(sort);
            }
        });
    }

    setActiveTab(tab: 'future' | 'past') {
        this.activeTab.set(tab);
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { type: tab },
            queryParamsHandling: 'merge',
        });
    }

    setSortBy(sort: SortOption) {
        this.sortBy.set(sort);
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { sort: sort },
            queryParamsHandling: 'merge',
        });
    }

    onSortChange(event: Event) {
        const select = event.target as HTMLSelectElement;
        this.setSortBy(select.value as SortOption);
    }
}

