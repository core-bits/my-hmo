import { Injectable } from '@angular/core';

export interface IUser {
    id: number;
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    loginName: string;
    auth_token: string;
    roles: IUserRole[];
}

export interface IUserRole{
    id: number;
    name: string;
    description: string;
    menu: IMenu[];
}

export interface IMenu{
    id: number;
    name: string;
    description: string;
    sub: ISubMenu[];
}

export interface ISubMenu{
    id: number;
    name: string;
    description: string;
    pageLink: string;
    icon: string;
}

export interface IResponse<T> {
    message: ICommonResponse;
    data : T;
    total?: number;
}

export interface ICommonResponse{
    code: string;
    description?: string;
}

@Injectable()
export class UserProfileService {
    isLoggedIn: boolean = false;
    user: IUser;
    isLiveMenu: boolean;

    constructor(){}
}