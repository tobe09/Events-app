import { ISession } from '../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from 'src/app/common/error-handler.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VoterService {
    constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

    addVoter(eventId: number, session: ISession, voterName: string) {
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' } ) };

        return this.http.post<ISession>(url, session, options)
          .pipe(catchError(this.errorHandler.handleError<ISession>('addVoter')));
    }

    deleteVoter(session: ISession, username: string) {
        session.voters = session.voters.filter(voter => voter !== username);
    }

    userHasVoted(session: ISession, username: string) {
        return session.voters.some(voter => voter === username);
    }
}