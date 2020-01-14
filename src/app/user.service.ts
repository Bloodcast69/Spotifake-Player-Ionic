import {Injectable} from '@angular/core';
import {Observable, of, Subject, timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

export interface IUser {
    login: string;
    password: string;
}

@Injectable()
export class UserService {
    private _user: IUser | null = {login: 'user@example.com', password: 'user123'};
    public registeredUsers: IUser[] = [
        {login: 'user@example.com', password: 'user123'}
    ];
    private userContext$: Subject<IUser> = new Subject<IUser>();

    public get user() {
        return this._user;
    }

    public set user(user: IUser) {
        this._user = user;
    }

    constructor() {
    }

    public login(user: IUser) {
        const foundUser = this.registeredUsers.find((registeredUser: IUser) =>
            registeredUser.login === user.login && registeredUser.password === user.password);
        const foundUser$ = of(foundUser);
        return timer(1000).pipe(switchMap(() => {
            if (foundUser) {
                this.user = user;
                this.userContext$.next(user);
            } else {
                this.user = null;
            }

            return foundUser$;
        }));
    }

    public logout() {
        this.user = null;
        this.userContext$.next(null);
        return timer(1000);
    }

    public register(user: IUser) {
        this.registeredUsers.push(user);
        return timer(1000);
    }

    public userContextChanges(): Observable<IUser> {
        return this.userContext$;
    }
}
