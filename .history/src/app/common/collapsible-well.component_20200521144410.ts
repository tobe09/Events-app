import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
        <div>
            <ng-content class="[title]" (click)="toggleContent()"><ng-content>
            <ng-content *ngIf="visible" class"[details]"><ng-content>
        </div>
    `
})
export class CollapsibleWellComponent {
    visible = true;
    @Output() contentToggled = new EventEmitter();

    toggleContent() {
        this.visible = !this.visible;
        this.contentToggled.emit();
    }
} 