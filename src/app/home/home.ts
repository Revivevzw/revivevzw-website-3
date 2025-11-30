import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Working } from './working/working';
import { Support } from './support/support';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [Hero, About, Working, Support],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class HomeComponent {

}
