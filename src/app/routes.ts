import {Routes} from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { GamesComponent } from './games/games.component';
import { LibraryComponent } from './library/library.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SignInComponent } from "./sign-in/sign-in.component";

export const appRoutes: Routes = [
    {path: 'login', component: SignInComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'profile', component: ProfilePageComponent},
    {path: 'games', component: GamesComponent},
    {path: 'library', component: LibraryComponent},
    {path: 'friends', component: FriendsComponent},
    {path: '**', redirectTo: '/login', pathMatch: 'full'}
]