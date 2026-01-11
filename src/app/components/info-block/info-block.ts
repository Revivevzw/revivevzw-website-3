import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-info-block',
    standalone: true,
    templateUrl: './info-block.html',
    styleUrl: './info-block.css'
})
export class InfoBlock {
    @Input() label: string = '';
    @Input() title: string = '';
}
