import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
    templateUrl: 'event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        a { cursor: pointer; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;

    filterKey = 'level';
    filterValue = 'All';

    sortKey = 'none';

    constructor (private eventService: EventService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.data.forEach(data => {
            this.event = data['event'];
            this.addMode = false;
            // // get a new event on next of params observable
            // this.eventService.getEvent(+params['id']).subscribe(event => {
            //     this.event = event;
            //     this.addMode = false;
            // });
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const maxId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = maxId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event).subscribe();
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}