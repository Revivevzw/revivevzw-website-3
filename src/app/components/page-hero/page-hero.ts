import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-page-hero',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './page-hero.html',
    styleUrl: './page-hero.css',
})
export class PageHero {
    @Input() title: string = '';
    @Input() subtitle: string = '';
    @Input() backgroundImage: string = '';
    @Input() height: string = '500px';
}
