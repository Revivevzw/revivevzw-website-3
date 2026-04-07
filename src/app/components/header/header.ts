import { Component, inject, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { LanguageService } from '../../api/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, TranslateModule],
    templateUrl: './header.html',
    styleUrl: './header.css'
})
export class Header {
    private languageService = inject(LanguageService);
    private elementRef = inject(ElementRef);
    private router = inject(Router);

    searchIconUrl = "/assets/search.svg";
    cartIconUrl = "/assets/cart.svg";
    carretDownUrl = "/assets/carret-down.svg";
    carretRightUrl = "/assets/carret-right.svg";

    languages = this.languageService.getLanguages();
    isLangMenuOpen = false;
    isMenuOpen = false;
    isScrolled = false;
    isVisible = true;
    private lastScrollTop = 0;

    constructor() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.isMenuOpen = false;
            this.isLangMenuOpen = false;
            this.isVisible = true;
        });
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // Hide header on scroll down, show on scroll up
        // But keep it visible if the mobile menu is open
        if (scrollTop > this.lastScrollTop && scrollTop > 150 && !this.isMenuOpen) {
            this.isVisible = false;
        } else {
            this.isVisible = true;
        }
        
        this.isScrolled = scrollTop > 20;
        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }

    currentLang() {
        return this.languageService.getCurrentLanguage();
    }

    currentLangLabel() {
        return this.languages.find(l => l.code === this.currentLang())?.label || 'NL';
    }

    setLanguage(lang: string) {
        this.languageService.setLanguage(lang);
        this.isLangMenuOpen = false;
    }

    toggleLangMenu() {
        this.isLangMenuOpen = !this.isLangMenuOpen;
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.isLangMenuOpen = false;
        }
    }
}
