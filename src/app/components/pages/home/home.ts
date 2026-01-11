import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { SplitContentCard } from '../../split-content-card/split-content-card';
import { InfoBlock } from '../../info-block/info-block';
import { IconCard } from '../../icon-card/icon-card';

@Component({
    selector: 'app-home',
    imports: [Hero, SplitContentCard, InfoBlock, IconCard],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home {

}
