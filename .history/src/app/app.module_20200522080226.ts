import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar-component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user';

// @ts-ignore
declare let toastr: Toastr = window['toastr'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    Error404Component
  ],
  providers: [
    { provide: TOASTR_TOKEN, useExisting: toastr },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }