import { Component, Input } from '@angular/core';
import { IEvent } from './index';

@Component({
    selector: 'events-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name | uppercase}}</h2>
        <div>Date: {{event?.date | date : 'shortDtae'}}</div>
        <div [class.green]="event?.time==='8:00 am'" [ngSwitch]="event?.time">
            Time: {{event?.time}},
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div [ngClass]="getPriceClass()">Price: {{event?.price | currency: 'USD'}}</div>
        <div [hidden]="!event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">Online Url: {{event.onlineUrl}}</div>
    </div>
    `,
    styles: [`
        .red { color: red !important; }
        .green { color: green !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb }
    `]
})
export class EventsThumbnailComponent {
    @Input() event: IEvent;

    getPriceClass() {
        const isLessThan600 = this.event.price < 600;
        return { red: isLessThan600, bold: isLessThan600 };
    }
}