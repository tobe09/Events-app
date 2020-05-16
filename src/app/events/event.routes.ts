import { Routes } from '@angular/router';

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
  } from './index';

export const eventRoutes: Routes = [
    { path: '', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: ':id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
];