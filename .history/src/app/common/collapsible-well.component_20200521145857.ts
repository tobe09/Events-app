import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
        <div class="well pointable" (click)="toggleContent()">
            <h4>
                <ng-content select="[title]"></ng-content>
            </h4>
            <ng-content *ngIf="visible" select="[details]"></ng-content>
        </div>
    `
})
export class CollapsibleWellComponent {
    visible = true;
    @Input() info: {[key: string]: any };
    @Output() contentToggled = new EventEmitter<{[key: string]: any }>();

    toggleContent() {
        this.visible = !this.visible;
        this.contentToggled.emit(this.info);
    }
}