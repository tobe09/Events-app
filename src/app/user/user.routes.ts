import { Routes } from '@angular/router';
import { ProfileComponent, LoginComponent } from './index';

export const userRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent }
];