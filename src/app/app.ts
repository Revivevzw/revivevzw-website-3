import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { CtaBanner } from './components/cta-banner/cta-banner';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, Header, Footer, CtaBanner],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class AppComponent {
    title = 'revivevzw-website-3';
}
