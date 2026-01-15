import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionApiService } from '../../api/services/mission-api.service';
import { Mission } from '../../api/models/mission.model';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';

@Component({
    selector: 'app-missions',
    standalone: true,
    imports: [CommonModule, Breadcrumbs],
    templateUrl: './missions.html',
    styleUrl: './missions.css',
})
export class Missions implements OnInit {
    activeTab: 'future' | 'past' = 'future';
    allMissions: Mission[] = [];
    loading = true;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private missionApi: MissionApiService,
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const type = params['type'];
            if (type === 'past') {
                this.activeTab = 'past';
            } else if (type === 'future') {
                this.activeTab = 'future';
            }
        });

        this.missionApi.getAll().subscribe({
            next: (missions) => {
                this.allMissions = missions;
                this.loading = false;
            },
            error: (err) => {
                console.error('Error fetching missions', err);
                this.loading = false;
            }
        });
    }

    get filteredMissions() {
        let filtered: Mission[] = [];
        if (this.activeTab === 'future') {
            filtered = this.allMissions.filter(m => m.type === 0); // PLANNED_MISSIONS
        } else {
            filtered = this.allMissions.filter(m => m.type === 2); // PAST_MISSIONS
        }

        return filtered.sort((a, b) => {
            const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
            const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
            return dateB - dateA;
        });
    }

    setActiveTab(tab: 'future' | 'past') {
        this.activeTab = tab;
        const typeInfo = tab === 'future' ? 'future' : 'past';
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { type: typeInfo },
            queryParamsHandling: 'merge',
        });
    }
}
