import { Component } from '@angular/core';
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { SplitContentCard } from "../../components/split-content-card/split-content-card";

@Component({
    selector: 'app-legacies',
    imports: [Breadcrumbs, SplitContentCard],
    templateUrl: './legacies.html',
    styleUrl: './legacies.css',
})
export class Legacies {

}
