import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-card',
    standalone: true,
    templateUrl: './icon-card.html',
    styleUrl: './icon-card.css'
})
export class IconCard {
    @Input() title: string = '';
    @Input() iconBackgroundColor: string = 'var(--color-cream-300)';
}
