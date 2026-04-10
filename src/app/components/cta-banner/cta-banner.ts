import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-cta-banner',
    imports: [TranslateModule, RouterLink],
    templateUrl: './cta-banner.html',
    styleUrl: './cta-banner.css',
})
export class CtaBanner {

}
