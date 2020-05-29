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

        return this.http.post<ISession>(url, session)
          .pipe(catchError(this.errorHandler.handleError<ISession>('addVoter')));
    }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        return this.http.delete<ISession>(url)
          .pipe(catchError(this.errorHandler.handleError<ISession>('deleteVoter')));
    }

    userHasVoted(session: ISession, username: string) {
        return session.voters.some(voter => voter === username);
    }
}