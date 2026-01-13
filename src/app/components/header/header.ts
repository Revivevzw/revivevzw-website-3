import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './header.html',
    styleUrl: './header.css'
})
export class Header {
    searchIconUrl = "/assets/search.svg";
    cartIconUrl = "/assets/cart.svg";
    carretDownUrl = "/assets/carret-down.svg";
    carretRightUrl = "/assets/carret-right.svg";
}
