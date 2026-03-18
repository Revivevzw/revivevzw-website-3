import { Component } from '@angular/core';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { InfoBlock } from '../../components/info-block/info-block';

@Component({
  selector: 'app-gdpr',
  imports: [Breadcrumbs, InfoBlock],
  templateUrl: './gdpr.html',
  styleUrl: './gdpr.css',
})
export class Gdpr {

}
