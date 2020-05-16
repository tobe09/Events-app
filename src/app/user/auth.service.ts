import { IUser } from './user.model';

export class AuthService {
currentUser: IUser;

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Tobenna',
            lastName: 'Chineke'
        };
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}