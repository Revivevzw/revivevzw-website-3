import { Component } from '@angular/core';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { InfoBlock } from '../../components/info-block/info-block';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gdpr',
  imports: [Breadcrumbs, InfoBlock, TranslateModule],
  templateUrl: './gdpr.html',
  styleUrl: './gdpr.css',
})
export class Gdpr {

}
