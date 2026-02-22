import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MissionApiService } from '../../api/services/mission-api.service';
import { Mission } from '../../api/models/mission.model';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-missions',
    standalone: true,
    imports: [CommonModule, Breadcrumbs, RouterLink],
    templateUrl: './missions.html',
    styleUrl: './missions.css',
})
export class Missions implements OnInit {
    private missionApi = inject(MissionApiService);
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    // Reactive State using Signals
    activeTab = signal<'future' | 'past'>('future');

    // toSignal handles the subscription and provides a reactive Signal of the data
    private allMissions = toSignal(this.missionApi.getAll(), { initialValue: [] as Mission[] });

    // Computed state automatically updates when activeTab or allMissions changes
    filteredMissions = computed(() => {
        const tab = this.activeTab();
        const missions = this.allMissions();

        const filtered = missions.filter(m =>
            tab === 'future' ? m.type === 0 : m.type === 2
        );

        return [...filtered].sort((a, b) => {
            const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
            const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
            return dateB - dateA;
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
}
