import {Component} from '@angular/core';
import {IUser, UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage {
    public user: IUser;

    constructor(private router: Router, private userService: UserService) {
        this.userService.userContextChanges().subscribe((userContext: IUser) => {
            this.user = userContext;
        });
    }

    redirectToPlayer() {
        this.router.navigate(['home']);
    }

    logIn() {
        this.router.navigate(['login']);
    }

}
