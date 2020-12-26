import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IntellectService } from '../intellect.service';
@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public router: Router, public intellectService: IntellectService) { }

  ngOnInit(): void {
    this.intellectService.userrole();
  }
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  error: string;
  submit() {
    if (this.form.value.username === '' || this.form.value.password === '') {
      this.error = 'Please Enter UserName And Password';
    } else if (this.form.value.username.length > 0 && this.form.value.password.length > 0) {
      const existingUser = this.intellectService.currentUser.find((loggedUser) => loggedUser.username === this.form.value.username);
      if (existingUser) {
        localStorage.setItem('username', this.form.value.username);
        this.router.navigate(['admin-landing-page']);
      } else {
        this.error = 'Your Not A Register User';
      }
    } else {
      this.error = 'Please Enter Valid UserName And Password';
    }
  }
}
