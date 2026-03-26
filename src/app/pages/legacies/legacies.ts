import { Component } from '@angular/core';
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { SplitContentCard } from "../../components/split-content-card/split-content-card";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-legacies',
    imports: [Breadcrumbs, SplitContentCard, TranslateModule],
    templateUrl: './legacies.html',
    styleUrl: './legacies.css',
})
export class Legacies {

}
