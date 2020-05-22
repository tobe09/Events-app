import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from './shared/event.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './index';

@Component({
    template: `
    <div>
        <h1>Upcoming Events</h1>
        <hr/>
        <div *ngFor="let event of events" >
            <div class="col-md-6">
                <events-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></events-thumbnail>
            <div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName: string) {
        this.toastr.success(eventName);
    }
}