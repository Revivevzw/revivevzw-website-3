import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-activity-card',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './activity-card.html',
    styleUrl: './activity-card.css'
})
export class ActivityCard {
    public translate = inject(TranslateService);
    @Input() link?: any[] | string;
    @Input() externalLink?: string;
    @Input() imageSrc?: string;
    @Input() imageAlt?: string;
    @Input() date?: Date | string;
    @Input() title!: string;
    @Input() description?: string;
    @Input() identifier?: string;
}
