import { Routes } from '@angular/router';

import { Error404Component } from './errors/404.component';


export const appRoutes: Routes = [
    { path: '404', component: Error404Component },
    { path: 'events', loadChildren: './events/event.module#EventModule'},
    { path: 'users', loadChildren: './user/user.module#UserModule'},
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: '**', redirectTo: 'events', pathMatch: 'full' }
];