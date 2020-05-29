import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IsDirty } from '../common/app-interfaces';


import { eventRoutes } from './event.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from '../common/collapsible-well.component';
import { DurationPipe } from './shared/duration.pipe';
import { EventsListComponent } from './events-list-component';
import { EventsThumbnailComponent } from './event-thumbnail-component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event.component';
import { CreateSessionComponent } from './event-details/create-session.component';
import { SessionListComponent } from './event-details/session-list.component';
import { UpvoteComponent } from './event-details/upvote.component';
import { LocationValidatorDirective } from './location-validator.directive';
import { EventRouteActivator } from './event-details/event-route-activator.service';
import { EventListResolver } from './shared/event-list-resolve.service';
import { VoterService } from './event-details/voter.service';
import { HttpClientModule } from '@angular/common/http';
import { EventResolver } from './shared/event-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(eventRoutes)
    ],
    declarations: [
        EventsListComponent,
        EventsThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        UpvoteComponent,
        DurationPipe,
        LocationValidatorDirective
    ],
    providers: [
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
        EventListResolver,
        EventResolver,
        VoterService
    ]
})
export class EventModule {

}