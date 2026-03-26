import { Component } from '@angular/core';
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { SplitContentCard } from "../../components/split-content-card/split-content-card";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-volunteer-stories',
    imports: [Breadcrumbs, SplitContentCard, TranslateModule],
    templateUrl: './volunteer-stories.html',
    styleUrl: './volunteer-stories.css',
})
export class VolunteerStories {

}
