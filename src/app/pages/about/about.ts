import { Component } from '@angular/core';
import { InfoBlock } from '../../components/info-block/info-block';
import { SplitContentCard } from '../../components/split-content-card/split-content-card';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about',
    imports: [InfoBlock, SplitContentCard, Breadcrumbs, RouterLink],
    templateUrl: './about.html',
    styleUrl: './about.css',
})
export class About {

}
