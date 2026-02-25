import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Footer } from '../../components/footer/footer';
import { SplitContentCard } from '../../components/split-content-card/split-content-card';

@Component({
    selector: 'app-become-member',
    standalone: true,
    imports: [CommonModule, Header, Breadcrumbs, Footer, SplitContentCard],
    templateUrl: './become-member.html',
    styleUrl: './become-member.css',
})
export class BecomeMember {

}
