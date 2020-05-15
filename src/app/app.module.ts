import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list-component';
import { EventsThumbnailComponent } from './events/event-thumbnail-component';
import { NavbarComponent } from './nav/navbar-component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent, NavbarComponent, EventsListComponent, EventsThumbnailComponent, EventDetailsComponent
  ],
  providers: [
    EventService, ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }