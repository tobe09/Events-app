import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar-component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { JQUERY_TOKEN } from './common/jquery.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user';
import { FormsModule } from '@angular/forms';
import { EventService } from './events';

const toastr: Toastr = window['toastr'];
const jquery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    Error404Component
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jquery },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }