import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-activity-card',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './activity-card.html',
    styleUrl: './activity-card.css'
})
export class ActivityCard {
    @Input() link?: any[] | string;
    @Input() externalLink?: string;
    @Input() imageSrc?: string;
    @Input() imageAlt?: string;
    @Input() date?: Date | string;
    @Input() title!: string;
    @Input() description?: string;
}
