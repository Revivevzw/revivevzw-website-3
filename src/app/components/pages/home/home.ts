import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { SplitContentCard } from '../../split-content-card/split-content-card';

@Component({
    selector: 'app-home',
    imports: [Hero, SplitContentCard],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home {

}
