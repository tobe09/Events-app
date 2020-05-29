export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
}

export interface LoginInfo {
    success: boolean;
    user: IUser;
}