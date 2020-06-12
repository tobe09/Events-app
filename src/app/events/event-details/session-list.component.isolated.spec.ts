import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { By } from '@angular/platform-browser';
import { AuthService } from 'src/app/user';
import { VoterService } from './voter.service';
import { Toastr, TOASTR_TOKEN, CollapsibleWellComponent } from 'src/app/common';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../shared/duration.pipe';

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

    beforeEach(async(() => {
        const mockAuthService = <AuthService>{ isAuthenticated: () => true, currentUser: { userName: 'joe' } },
         mockVoterService = <VoterService>{ userHasVoted: (_, __) => true },
         toastr = <Toastr>{};

         TestBed.configureTestingModule({
             imports: [],
             declarations: [
                 SessionListComponent,
                 DurationPipe,
                //  UpvoteComponent,
                //  CollapsibleWellComponent
                ],
             providers: [
                 { provide: TOASTR_TOKEN, useValue: toastr },
                 { provide: AuthService, useValue: mockAuthService },
                 { provide: VoterService, useValue: mockVoterService }
                ],
            schemas: [NO_ERRORS_SCHEMA] // ensures that angular does not produce error when component dependencies are missing
         });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        debugEl = fixture.debugElement;
    });

    describe('initial_display', () => {
        it('should_have_correct_session_title', () => {
            component.sessions = [
                { id: 3, name: 'session 1', presenter: 'joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob'] }
            ];
            component.filterKey = 'name';
            component.filterValue = 'all';
            component.sortKey = 'name';
            component.eventId = 4;

            component.ngOnChanges(); // call not needed for ngOnInit
            fixture.detectChanges();

            expect(element.querySelector('[title]').textContent).toContain('session 1');
            expect(debugEl.query(By.css('[title]')).nativeElement.textContent).toContain('session 1');
        });
    });
});