import { Component, Input, OnChanges, Inject } from '@angular/core';
import { ISession } from '../shared';
import { TOASTR_TOKEN, Toastr } from 'src/app/common/toastr.service';
import { AuthService } from 'src/app/user';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filteredSessions: ISession[];
    @Input() filterKey: string;
    @Input() filterValue: string;
    @Input() sortKey: string;
    @Input() eventId: number;
    @Input() visibleSessions: ISession[];

    constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr, private auth: AuthService, private voterService: VoterService) {}

    ngOnChanges() {
        if (this.sessions) {
            if (!this.filterKey || !this.filterValue || this.filterValue.toLocaleLowerCase() === 'all') {
                this.filteredSessions = this.sessions.slice(0);
            } else {
                this.filteredSessions = this.sessions.filter(s => s[this.filterKey] === this.filterValue);
            }

            this.visibleSessions = this.filteredSessions.slice(0);
            if (this.sortKey && this.sortKey.toLocaleLowerCase() !== 'none') {
                if (this.sortKey.toLocaleLowerCase() === 'name') {
                    this.visibleSessions.sort(this.sortByNameAscending);
                }
                else if (this.sortKey.toLocaleLowerCase() === 'vote') {
                    this.visibleSessions.sort(this.sortByVoteDescending);
                }
            }
        }
    }

    isAuthenticated() {
        return this.auth.isAuthenticated();
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.auth.currentUser.userName);
        }
        else {
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName).subscribe();
        }

        if (this.sortKey.toLocaleLowerCase() === 'vote') {
            this.visibleSessions.sort(this.sortByVoteDescending);
        }
    }

    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    }

    private sortByNameAscending(session1: ISession, session2: ISession) {
        return session1.name.localeCompare(session2.name);
    }

    private sortByVoteDescending(session1: ISession, session2: ISession) {
        return session2.voters.length - session1.voters.length;
    }

    handleContentToggled(name: string, event: { visible: boolean }) {
        this.toastr.info(name + `${event.visible ? ' expanded!' : ' shrinked!'}`);
    }
}