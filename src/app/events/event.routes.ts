import { Routes } from '@angular/router';
import { EventsListComponent } from './events-list-component';
import { EventListResolver } from './shared/event-list-resolve.service';
import { CreateEventComponent } from './create-event.component';
import { CreateSessionComponent } from './event-details/create-session.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventResolver } from './shared/event-resolver.service';

export const eventRoutes: Routes = [
    { path: '', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'new', component: CreateEventComponent, canDeactivate: ['checkBeforeDeactivate'] },
    { path: 'session/new', component: CreateSessionComponent },
    { path: ':id', component: EventDetailsComponent, resolve: { event: EventResolver } } // canActivate: [EventRouteActivator] }
];