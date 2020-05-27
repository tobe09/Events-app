import { Resolve } from '@angular/router';
import { EventService } from './event.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {}

    resolve() {
        return this.eventService.getEvents();
    }
}