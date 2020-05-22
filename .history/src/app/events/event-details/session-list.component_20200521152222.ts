import { Component, Input } from '@angular/core';
import { ISession } from '../shared';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent {
    @Input() sessions: ISession[];
    @Input() filteredSessions: ISession[];

    constructor(private toastr: ToastrService) {}

    handleContentToggled(event: { visible: boolean, data: ISession }) {
        this.toastr.info(event.data.name + `${event.visible ? ' expanded' : ' shrinked'}`);
    }
}