import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  constructor(public friendservice: FriendsService, private router: Router, private auth: AuthService) { }
  ngOnInit(): void {
    this.redirectToLogin()
    console.log(this.friendservice.myLibraryArray)
  }

  redirectToLogin() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login'])
    }
  }

  handleGameClicked(game: any) {
    console.log('received game from library', game)
  }

}
