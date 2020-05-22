import { Component, Input } from '@angular/core';
import { ISession } from '../shared';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent {
    @Input() sessions: ISession[];

    constructor(private toastr: ToastrService) {}

    handleContentToggled(info: any) {
        this.toastr.info(info.name + ' shrinked');
    }
}