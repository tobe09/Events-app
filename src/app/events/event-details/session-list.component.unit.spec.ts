import { SessionListComponent } from './session-list.component';
import { Toastr } from 'src/app/common';
import { AuthService } from 'src/app/user';
import { VoterService } from './voter.service';
import { ISession } from '../shared';


describe('SessionListComponent', () => {
    let sessionListComponent: SessionListComponent,
     toastr: Toastr,
     authService: AuthService,
     voterService: VoterService;

     beforeEach(() => {
        toastr = jasmine.createSpyObj('toastr',  ['info']);
        authService = jasmine.createSpyObj('authService',  ['isAuthenticated']);
        voterService = jasmine.createSpyObj('voterService',  ['deleteVoter', 'addVoter', 'userHasVoted']);
        sessionListComponent = new SessionListComponent(toastr, authService, voterService);
     });

     describe('ngOnChanges', () => {
         it('should_filter_the_sessions_correctly', () => {
            sessionListComponent.sessions = <ISession[]>[
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 2', level: 'intermediate' },
                { name: 'session 3', level: 'beginner' }
            ];
            sessionListComponent.filterKey = 'level';
            sessionListComponent.filterValue = 'intermediate';
            sessionListComponent.sortKey = 'name';

            sessionListComponent.ngOnChanges();

            expect(sessionListComponent.visibleSessions.length).toBe(2);
         });

         it('should_sort_the_sessions_correctly', () => {
            sessionListComponent.sessions = <ISession[]>[
                { name: 'session 3', level: 'intermediate' },
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 2', level: 'beginner' }
            ];
            sessionListComponent.filterKey = 'level';
            sessionListComponent.filterValue = 'all';
            sessionListComponent.sortKey = 'name';

            sessionListComponent.ngOnChanges();

            expect(sessionListComponent.visibleSessions[2].name).toBe('session 3');
         });
     });
});