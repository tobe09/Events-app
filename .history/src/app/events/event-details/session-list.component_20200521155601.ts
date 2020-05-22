import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filteredSessions: ISession[];
    @Input() filterKey: string;
    @Input() filterValue: string;
    @Input() sortedSessions: ISession[];
    @Input() sortKey: string;

    constructor(private toastr: ToastrService) {}

    ngOnChanges() {
        if (this.sessions) {
            if (!this.filterKey || !this.filterValue || this.filterValue.toLocaleLowerCase() === 'all') {
                this.filteredSessions = this.sessions.slice(0);
            } else {
                this.filteredSessions = this.sessions.filter(s => s[this.filterKey] === this.filterValue);
            }

            this.sortedSessions = this.filteredSessions.slice(0);
            if (this.sortKey && this.sortKey.toLocaleLowerCase() !== 'none') {
                if (this.sortKey.toLocaleLowerCase() === 'name') {
                    this.sortedSessions.sort((s1, s2) => s1.name.localeCompare(s2.name));
                } else if (this.sortKey.toLocaleLowerCase() === 'vote') {
                    this.sortedSessions.sort((s1, s2) => s2.voters.length - s1.voters.length);
                }
            }
        }
    }

    handleContentToggled(event: { visible: boolean, data: ISession }) {
        this.toastr.info(event.data.name + `${event.visible ? ' expanded' : ' shrinked'}`);
    }
}