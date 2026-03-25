import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hero',
    imports: [],
    templateUrl: './hero.html',
    styleUrl: './hero.css',
})
export class Hero {
    @Input() height: string = "100vh";
    @Input() imageSrc: string = "";
    @Input() imageAlt: string = "";
    @Input() title: string = "";
}
