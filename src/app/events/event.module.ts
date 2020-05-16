import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IsDirty } from '../common/app-interfaces';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './index';

import { eventRoutes } from './event.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(eventRoutes)
    ],
    declarations: [
        EventsListComponent,
        EventsThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
    ],
    providers: [
        EventService,
        EventRouteActivator,
        {
          provide: 'canDeactivateCreateEvent',
          useValue: (component: IsDirty) => {
            if (component.isDirty()) {
              return window.confirm('You have not saved this event. Do you really want to cancel?');
            }
            return true;
          }
        },
        EventListResolver
    ]
})
export class EventModule {

}