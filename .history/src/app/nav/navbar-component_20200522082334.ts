import { Component } from '@angular/core';
import { AuthService } from '../user';
import { ISession, EventService, FoundSessions } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar-component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm {  margin-right: 100px; }
        li > a.active { color: #F97924 }
    `]
})
export class NavbarComponent {
    searchTerm = '';
    foundSessions: FoundSessions[];

    constructor(private authService: AuthService, private eventService: EventService) {}

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm)
        .subscribe((sessions: FoundSessions[]) => { this.foundSessions = sessions; console.log(sessions); });
    }
}
