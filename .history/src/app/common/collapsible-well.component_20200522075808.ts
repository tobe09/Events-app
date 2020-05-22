import { Component, Output, EventEmitter } from '@angular/core';

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
    @Output() contentToggled = new EventEmitter();

    toggleContent() {
        this.visible = !this.visible;
        this.contentToggled.emit({ visible: this.visible });
    }
}