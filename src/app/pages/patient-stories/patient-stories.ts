import { Component } from '@angular/core';
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { SplitContentCard } from "../../components/split-content-card/split-content-card";

@Component({
    selector: 'app-patient-stories',
    imports: [Breadcrumbs, SplitContentCard],
    templateUrl: './patient-stories.html',
    styleUrl: './patient-stories.css',
})
export class PatientStories {

}
