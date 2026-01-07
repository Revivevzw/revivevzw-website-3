import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-split-content-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './split-content-card.html',
    styleUrl: './split-content-card.css'
})
export class SplitContentCard {
    @Input() imageSrc: string = '';
    @Input() imageAlt: string = '';
    @Input() label: string = '';
    @Input() title: string = '';
    @Input() reversed: boolean = false;
}
