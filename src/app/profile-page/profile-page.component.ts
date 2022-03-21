import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IUser } from '../user.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  username!: any
  email!: any
  age!: any
  contact!: IUser

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.redirectToLogin()
    this.contact = {
      username: this.auth.currentUser.username,
      email: this.auth.currentUser.email,
      password: this.auth.currentUser.password,
      age: this.auth.currentUser.age
    }

  }

  redirectToLogin() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login'])
    }
  }
  
  save(values: any): void {
    console.log(values)
      this.auth.updateCurrentUser(values.username, values.email, values.age)
      this.router.navigate(['/friends'])
  }
}
