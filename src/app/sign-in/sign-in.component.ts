import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  password: any
  email: any
  mouseoverLogin!: boolean
  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

  login(loginFormValues: any): void {
    this.auth.loginUser(loginFormValues.email, loginFormValues.password)
    this.auth.updateCurrentUserEmailPass(loginFormValues.email, loginFormValues.password)
    this.auth.showNav = true;
    console.log(this.auth.currentUser.email, this.auth.currentUser.username, this.auth.currentUser.password)
    this.router.navigate(['/profile'])
  }
}
