import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { SplitContentCard } from '../../components/split-content-card/split-content-card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-become-member',
    standalone: true,
    imports: [CommonModule, Breadcrumbs, SplitContentCard, TranslateModule],
    templateUrl: './become-member.html',
    styleUrl: './become-member.css',
})
export class BecomeMember {

}
