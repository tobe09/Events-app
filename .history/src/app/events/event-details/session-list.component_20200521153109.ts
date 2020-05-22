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
    @Input() filterBy: string;

    constructor(private toastr: ToastrService) {}

    ngOnChanges() {
        if (this.sessions) {
            if (this.filterBy.toLowerCase() === 'all') {
                this.filteredSessions = this.sessions.slice(0);
            } else {
                this.filteredSessions = this.sessions.filter(s => s.level.toLowerCase() === this.filterBy);
            }
        }
    }

    handleContentToggled(event: { visible: boolean, data: ISession }) {
        this.toastr.info(event.data.name + `${event.visible ? ' expanded' : ' shrinked'}`);
    }
}