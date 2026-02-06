import { Component, inject, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../api/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

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

    searchIconUrl = "/assets/search.svg";
    // ... rest of urls ...
    cartIconUrl = "/assets/cart.svg";
    carretDownUrl = "/assets/carret-down.svg";
    carretRightUrl = "/assets/carret-right.svg";

    languages = this.languageService.getLanguages();
    isLangMenuOpen = false;

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

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.isLangMenuOpen = false;
        }
    }
}
