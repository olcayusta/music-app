import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hidePassword: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['olcay@mail.com', Validators.required],
      password: ['12345678', Validators.required],
    }, {updateOn: 'submit'});
  }

  submit() {
    const {email, password} = this.loginForm.value;
    this.authService.signIn(email, password).subscribe(value => {
      if (value.token) {
        this.router.navigateByUrl('/');
      }
    });
  }

}
