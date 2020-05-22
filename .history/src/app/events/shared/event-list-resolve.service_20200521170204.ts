import { Resolve } from '@angular/router';
import { EventService } from './event.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any>, IEventListResolver {
    constructor(private eventService: EventService) {}

    resolve() {
        return this.eventService.getEvents().pipe(map(events => events));
    }
}

export interface IEventListResolver {
    resolve: () => void;
}