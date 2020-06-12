import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IsDirty } from '../common/app-interfaces';
import { IEvent } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
      em { float: right; color: #E05C65; padding-left: 10px; }
      .error input { background-color: #E3C3C5; }
      .error ::-webkit-input-placeholder { color: #999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color: #999; }
      .error :ms-input-placeholder { color: #999; }
    `]
})
export class CreateEventComponent implements IsDirty {
    newEvent: IEvent;

    constructor(private router: Router, private eventService: EventService) {}

    private _isDirty = false;
    isDirty() {
        return this._isDirty;
    }

    saveEvent(formValues: any) {
        const newEvent: IEvent = formValues;
        newEvent.date = new Date(newEvent.date.toString());

        this.eventService.saveEvent(newEvent).subscribe(event => {
            console.log(event.id);
            this._isDirty = false;
            this.router.navigate(['/events']);
        });
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}