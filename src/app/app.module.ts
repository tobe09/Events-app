import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar-component';
import { TOASTR_TOKEN, Toastr, JQUERY_TOKEN, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user';
import { FormsModule } from '@angular/forms';
import { EventService } from './events';
import { HttpClientModule } from '@angular/common/http';

const toastr: Toastr = window['toastr'];
const jquery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
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