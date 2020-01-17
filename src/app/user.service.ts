import {Injectable} from '@angular/core';
import {Observable, of, Subject, timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {ILoginResponse} from './interfaces/login-response.interface';

export interface IUser {
    login: string;
    password: string;
}

@Injectable()
export class UserService {
    private _user: IUser | null;
    private _isLoggedIn: boolean;

    private userContext$: Subject<IUser> = new Subject<IUser>();

    public get user() {
        return this._user;
    }

    public set user(user: IUser) {
        this._user = user;
    }

    public get isLoggedIn(): boolean {
        return this._isLoggedIn;
    }

    public set isLoggedIn(state: boolean) {
        this._isLoggedIn = state;
    }

    constructor(private httpClient: HttpClient) {
    }

    public login(user: IUser) {
        return this.httpClient.post(`${environment.api}/login`, user).pipe(switchMap((response: ILoginResponse) => {
            this.user = {login: response.login, password: response.password};
            this.userContext$.next(this.user);
            this.isLoggedIn = response.loggedIn;
            return of(this.isLoggedIn);
        }));
    }

    public register(user: IUser) {
        return this.httpClient.post(`${environment.api}/register`, user);
    }

    public userContextChanges(): Observable<IUser> {
        return this.userContext$;
    }
}
