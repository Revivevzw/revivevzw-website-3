import { Component } from '@angular/core';
import { SplitContentCard } from "../../components/split-content-card/split-content-card";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-join-team',
    imports: [SplitContentCard, Breadcrumbs, RouterLink, TranslateModule],
    templateUrl: './join-team.html',
    styleUrl: './join-team.css',
})
export class JoinTeam {

}
