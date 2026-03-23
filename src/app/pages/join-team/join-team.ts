import { Component } from '@angular/core';
import { SplitContentCard } from "../../components/split-content-card/split-content-card";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-join-team',
    imports: [SplitContentCard, Breadcrumbs, RouterLink],
    templateUrl: './join-team.html',
    styleUrl: './join-team.css',
})
export class JoinTeam {

}
