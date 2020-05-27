import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'upvote',
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div class="votingButton">
                    <i  class="glyphicon glyphicon-heart" [style.color]="iconColour"></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
    @Input() count: number;
    @Output() vote = new EventEmitter();

    @Input() set voted(value: boolean) {
        this.iconColour = value ? 'red' : 'white';
    }
    iconColour = 'white';

    onClick() {
        this.vote.emit({});
    }
}