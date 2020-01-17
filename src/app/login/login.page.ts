import {Component, OnInit} from '@angular/core';
import {IUser, UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loading = false;
    form: FormGroup = new FormGroup({
        login: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    constructor(private userService: UserService, private router: Router) {
    }


    ngOnInit() {
    }

    logIn() {
        const user = this.form.value;
        this.loading = true;
        this.userService.login(user).subscribe(() => {
            this.router.navigate(['home']);
            this.loading = false;
        });
    }

    redirectToRegister() {
        this.router.navigate(['register']);
    }
}
