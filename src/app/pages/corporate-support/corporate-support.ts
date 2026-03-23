import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { SplitContentCard } from '../../components/split-content-card/split-content-card';
import { CtaBanner } from '../../components/cta-banner/cta-banner';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-corporate-support',
    standalone: true,
    imports: [CommonModule, RouterModule, Breadcrumbs, SplitContentCard, CtaBanner],
    templateUrl: './corporate-support.html',
    styleUrl: './corporate-support.css',
})
export class CorporateSupport {

}
