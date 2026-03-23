import { Component } from '@angular/core';
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { SplitContentCard } from "../../components/split-content-card/split-content-card";

@Component({
    selector: 'app-collaboration',
    imports: [Breadcrumbs, SplitContentCard],
    templateUrl: './collaboration.html',
    styleUrl: './collaboration.css',
})
export class Collaboration {

}
