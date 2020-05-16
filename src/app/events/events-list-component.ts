import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
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

    constructor(private toastr: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName: string) {
        this.toastr.success(eventName);
    }
}