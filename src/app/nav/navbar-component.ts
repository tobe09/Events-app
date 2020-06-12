import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user';
import { EventService, FoundSessions, IEvent } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar-component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm {  margin-right: 100px; }
        li > a.active { color: #F97924 }
    `]
})
export class NavbarComponent implements OnInit {
    searchTerm = '';
    foundSessions: FoundSessions[];
    events: IEvent[];

    constructor(public authService: AuthService, private eventService: EventService) {}

    ngOnInit() {
        this.eventService.getEvents()
          .subscribe(events => this.events = events);
    }

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm)
        .subscribe((sessions: FoundSessions[]) => this.foundSessions = sessions);
    }
}
