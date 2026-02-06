import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private translate = inject(TranslateService);
    private readonly STORAGE_KEY = 'revive_user_lang';
    private readonly SUPPORTED_LANGS = ['nl-BE', 'fr-BE', 'en-GB'];

    constructor() {
        this.translate.addLangs(this.SUPPORTED_LANGS);

        const savedLang = localStorage.getItem(this.STORAGE_KEY);
        let initialLang = 'nl-BE';

        if (savedLang && this.SUPPORTED_LANGS.includes(savedLang)) {
            initialLang = savedLang;
        } else {
            const browserLang = this.translate.getBrowserLang();
            if (browserLang) {
                if (browserLang.startsWith('nl')) initialLang = 'nl-BE';
                else if (browserLang.startsWith('fr')) initialLang = 'fr-BE';
                else if (browserLang.startsWith('en')) initialLang = 'en-GB';
            }
        }

        this.setLanguage(initialLang);
    }

    setLanguage(lang: string) {
        if (this.SUPPORTED_LANGS.includes(lang)) {
            this.translate.use(lang);
            localStorage.setItem(this.STORAGE_KEY, lang);
        }
    }

    getCurrentLanguage(): string {
        return this.translate.getCurrentLang() || 'nl-BE';
    }

    getLanguages() {
        return [
            { code: 'nl-BE', label: 'NL', fullLabel: 'Nederlands' },
            { code: 'fr-BE', label: 'FR', fullLabel: 'Français' },
            { code: 'en-GB', label: 'EN', fullLabel: 'English' }
        ];
    }
}
