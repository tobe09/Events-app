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
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent
} from './index';

import { eventRoutes } from './event.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from '../common/collapsible-well.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(eventRoutes)
    ],
    declarations: [
        EventsListComponent,
        EventsThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent
    ],
    providers: [
        EventService,
        EventRouteActivator,
        {
          provide: 'checkBeforeDeactivate',
          useValue: (component: IsDirty) => {
            if (component.isDirty()) {
              return window.confirm('Some changes have not been saved. Do you really want to cancel?');
            }
            return true;
          }
        },
        EventListResolver
    ]
})
export class EventModule {

}