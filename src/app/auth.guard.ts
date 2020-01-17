import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(public userService: UserService, public router: Router) {
    }

    canActivate(): boolean {
        if (!this.userService.isLoggedIn) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
