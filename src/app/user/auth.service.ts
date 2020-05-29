import { IUser, LoginInfo } from './user.model';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../common/error-handler.service';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

    loginUser(username: string, password: string) {
        return this.http.post<LoginInfo>('/api/login', { username, password })
        .pipe(catchError(this.errorHandler.handleError<LoginInfo>('loginUser', null)),
              tap(result => this.currentUser = result && result.user ));
    }

    logoutUser() {
        return this.http.post('/api/logout', {})
        .pipe(catchError(this.errorHandler.handleError('logoutUser', null)),
              tap(() => this.currentUser = null ));
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        return this.http.put('/api/users/' + this.currentUser.id, this.currentUser);
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    refreshAuthenticationStatus() {
        return this.http.get<IUser>('/api/currentIdentity')
        .pipe(tap(user => this.currentUser = user ))
        .subscribe();
    }
}