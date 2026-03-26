import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslateService, provideTranslateLoader } from '@ngx-translate/core';
import { provideTranslateHttpLoader, TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import localeFrBe from '@angular/common/locales/fr-BE';
import localeEnGb from '@angular/common/locales/en-GB';

registerLocaleData(localeNlBe);
registerLocaleData(localeFrBe);
registerLocaleData(localeEnGb);

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })),
        provideHttpClient(withFetch()),
        provideTranslateService({
            loader: provideTranslateLoader(TranslateHttpLoader),
            defaultLanguage: 'nl-BE',
        }),
        provideTranslateHttpLoader({
            prefix: './assets/i18n/',
            suffix: '.json'
        })
    ]
};
