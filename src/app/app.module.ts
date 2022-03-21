import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FriendsComponent } from './friends/friends.component';
import { GamesComponent } from './games/games.component';
import { LibraryComponent } from './library/library.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import {FriendsService} from './friends.service';
import { FriendCardComponent } from './friend-card/friend-card.component';
import { GameCardComponent } from './game-card/game-card.component';
import { LibraryCardComponent } from './library-card/library-card.component';
import { AddedFriendComponent } from './added-friend/added-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ProfilePageComponent,
    FriendsComponent,
    GamesComponent,
    LibraryComponent,
    NavBarComponent,
    FriendCardComponent,
    GameCardComponent,
    LibraryCardComponent,
    AddedFriendComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
