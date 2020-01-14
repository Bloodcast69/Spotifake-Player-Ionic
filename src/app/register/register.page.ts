import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUser, UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loading = false;
  form: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    repeatPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
  }

  registerAccount() {
    const user = {login: this.form.get('login').value, password: this.form.get('password').value};
    this.loading = true;
    this.userService.register(user).subscribe(() => {
      this.loading = false;
      this.router.navigate(['login']);
    });
  }

  passwordsAreCorrect() {
    return this.form.get('password').value === this.form.get('repeatPassword').value;
  }
}
