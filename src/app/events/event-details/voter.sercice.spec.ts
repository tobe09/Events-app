import { VoterService } from './voter.service';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from 'src/app/common/error-handler.service';
import { ISession } from '../shared';
import { of } from 'rxjs';


describe('VoterService', () => {
    let voterService: VoterService,
        mockHttp: HttpClient,
        errorHandler: ErrorHandlerService;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp',  ['delete', 'post']);
        errorHandler = jasmine.createSpyObj('errorHandler', ['handleError']);
        voterService = new VoterService(mockHttp, errorHandler);
    });

    describe('deleteVoter', () => {
        it('should_remove_the_voter_from_the_list_of_voters', () => {
            const session = { id: 6, voters: ['joe', 'john'] };
            const voterName = 'joe';

            mockHttp.delete['and'].callFake(() => {
                const serverDelete = () => {
                    session.voters =  session.voters.filter(voter => voter !== voterName);
                    return session;
                };
                return of(serverDelete());
            });

            voterService.deleteVoter(3, <ISession>session, voterName).subscribe(() => {
                expect(session.voters.length).toBe(1);
                expect(session.voters[0]).toBe('john');
            });
        });

        it('should_call_http_delete_with_correct_url', () => {
            const session = { id: 6, voters: ['joe', 'john'] },
                eventId = 3,
                voterName = 'joe';
            mockHttp.delete['and'].returnValue(of());

            voterService.deleteVoter(eventId, <ISession>session, voterName);

            expect(mockHttp.delete).toHaveBeenCalledWith(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`);
        });
    });

    describe('addVoter', () => {        
        it('should_add_voter_from_the_list_of_voters', () => {
            const session = { id: 6, voters: ['joe', 'john'] };
            const voterName = 'jill';

            mockHttp.delete['and'].callFake(() => {
                const serverAdd = () => {
                    session.voters.push(voterName);
                    return session;
                };
                return of(serverAdd());
            });

            voterService.deleteVoter(2, <ISession>session, voterName).subscribe(() => {
                expect(session.voters.length).toBe(3);
                expect(session.voters[2]).toBe(voterName);
            });
        });

        it('should_call_http_post_with_correct_url', () => {
            const session = { id: 6, voters: ['joe', 'john'] },
                eventId = 3,
                voterName = 'jill';
            mockHttp.post['and'].returnValue(of());

            voterService.addVoter(eventId, <ISession>session, voterName);

            expect(mockHttp.post).toHaveBeenCalledWith(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`, session);
        });
    });
});