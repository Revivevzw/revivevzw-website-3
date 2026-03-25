import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from "../../components/hero/hero";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { ActivityCard } from "../../components/activity-card/activity-card";
import { LocalizePipe } from "../../pipes/localize.pipe";
import { ActivityApiService } from "../../api/services/activity-api.service";
import { Activity } from "../../api/models/activity.model";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

@Component({
    selector: 'app-events',
    standalone: true,
    imports: [CommonModule, Hero, Breadcrumbs, ActivityCard, LocalizePipe],
    templateUrl: './events.html',
    styleUrl: './events.css',
})
export class Events {
    private activityApi = inject(ActivityApiService);

    private upcomingEvents$ = this.activityApi.getUpcoming().pipe(
        map(events => {
            return events.sort((a, b) => {
                const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
                const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
                return dateA - dateB;
            });
        })
    );

    events = toSignal(this.upcomingEvents$, { initialValue: [] as Activity[] });
    loading = computed(() => this.events().length === 0);
}
