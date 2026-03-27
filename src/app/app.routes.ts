import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Team } from './pages/team/team';
import { Missions } from './pages/missions/missions';
import { Collaboration } from './pages/collaboration/collaboration';
import { Partners } from './pages/partners/partners';
import { PatientStories } from './pages/patient-stories/patient-stories';
import { VolunteerStories } from './pages/volunteer-stories/volunteer-stories';
import { Events } from './pages/events/events';
import { BecomeMember } from './pages/become-member/become-member';
import { CorporateSupport } from './pages/corporate-support/corporate-support';
import { Legacies } from './pages/legacies/legacies';
import { JoinTeam } from './pages/join-team/join-team';
import { Contact } from './pages/contact/contact';
import { MissionDetail } from './pages/mission-detail/mission-detail';
import { Gdpr } from './pages/gdpr/gdpr';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full', data: { breadcrumb: 'BREADCRUMBS.HOME' } },
    { path: 'team', component: Team, data: { breadcrumb: 'BREADCRUMBS.TEAM' } },
    { path: 'collaboration', component: Collaboration, data: { breadcrumb: 'BREADCRUMBS.COLLABORATION' } },
    { path: 'partners', component: Partners, data: { breadcrumb: 'BREADCRUMBS.PARTNERS' } },
    {
        path: 'missions',
        data: { breadcrumb: 'BREADCRUMBS.MISSIONS' },
        children: [
            { path: '', component: Missions },
            { path: ':id', component: MissionDetail, data: { breadcrumb: 'BREADCRUMBS.MISSION_DETAIL' } }
        ]
    },
    { path: 'patient-stories', component: PatientStories, data: { breadcrumb: 'BREADCRUMBS.PATIENT_STORIES' } },
    { path: 'volunteer-stories', component: VolunteerStories, data: { breadcrumb: 'BREADCRUMBS.VOLUNTEER_STORIES' } },
    { path: 'events', component: Events, data: { breadcrumb: 'BREADCRUMBS.EVENTS' } },
    { path: 'become-member', component: BecomeMember, data: { breadcrumb: 'BREADCRUMBS.BECOME_MEMBER' } },
    { path: 'corporate-support', component: CorporateSupport, data: { breadcrumb: 'BREADCRUMBS.CORPORATE_SUPPORT' } },
    { path: 'legacies', component: Legacies, data: { breadcrumb: 'BREADCRUMBS.LEGACIES' } },
    { path: 'join-team', component: JoinTeam, data: { breadcrumb: 'BREADCRUMBS.JOIN_TEAM' } },
    { path: 'contact', component: Contact, data: { breadcrumb: 'BREADCRUMBS.CONTACT' } },
    { path: 'gdpr', component: Gdpr, data: { breadcrumb: 'BREADCRUMBS.GDPR' } },
];
