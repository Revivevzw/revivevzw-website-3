import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { SplitContentCard } from '../../components/split-content-card/split-content-card';
import { InfoBlock } from '../../components/info-block/info-block';
import { IconCard } from '../../components/icon-card/icon-card';

@Component({
    selector: 'app-home',
    imports: [Hero, SplitContentCard, InfoBlock, IconCard],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home {

}
