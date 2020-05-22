import { Routes } from '@angular/router';

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent
  } from './index';

export const eventRoutes: Routes = [
    { path: '', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'new', component: CreateEventComponent, canDeactivate: ['checkBeforeDeactivate'] },
    { path: 'session/new', component: CreateSessionComponent },
    { path: ':id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
]; 