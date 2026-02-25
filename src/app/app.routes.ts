import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Team } from './pages/team/team';
import { Missions } from './pages/missions/missions';
import { Collaboration } from './pages/collaboration/collaboration';
import { Partners } from './pages/partners/partners';
import { PatientStories } from './pages/patient-stories/patient-stories';
import { VolunteerStories } from './pages/volunteer-stories/volunteer-stories';
import { Events } from './pages/events/events';
import { Donate } from './pages/donate/donate';
import { BecomeMember } from './pages/become-member/become-member';
import { CorporateSupport } from './pages/corporate-support/corporate-support';
import { Legacies } from './pages/legacies/legacies';
import { JoinTeam } from './pages/join-team/join-team';
import { Contact } from './pages/contact/contact';
import { MissionDetail } from './pages/mission-detail/mission-detail';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full', data: { breadcrumb: 'Home' } },
    { path: 'about', component: About, data: { breadcrumb: 'Wie zijn we' } },
    { path: 'team', component: Team, data: { breadcrumb: 'Ons team' } },
    { path: 'collaboration', component: Collaboration, data: { breadcrumb: 'Samenwerking' } },
    { path: 'partners', component: Partners, data: { breadcrumb: 'Onze partners' } },
    {
        path: 'missions',
        data: { breadcrumb: 'Onze missies' },
        children: [
            { path: '', component: Missions },
            { path: ':id', component: MissionDetail, data: { breadcrumb: 'Missie detail' } }
        ]
    },
    { path: 'patient-stories', component: PatientStories, data: { breadcrumb: 'Patiëntenverhalen' } },
    { path: 'volunteer-stories', component: VolunteerStories, data: { breadcrumb: 'Vrijwilligersverhalen' } },
    { path: 'events', component: Events, data: { breadcrumb: 'Events' } },
    { path: 'donate', component: Donate, data: { breadcrumb: 'Doe een gift' } },
    { path: 'become-member', component: BecomeMember, data: { breadcrumb: 'Word lid' } },
    { path: 'corporate-support', component: CorporateSupport, data: { breadcrumb: 'Steun als organisatie' } },
    { path: 'legacies', component: Legacies, data: { breadcrumb: 'Testamenten en legaten' } },
    { path: 'join-team', component: JoinTeam, data: { breadcrumb: 'Versterk ons team' } },
    { path: 'contact', component: Contact, data: { breadcrumb: 'Contact' } },
];
