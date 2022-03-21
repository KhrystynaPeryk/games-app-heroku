import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser!:IUser;
    showNav = true;
    loginUser(email: string, password: string, username: string = 'John', age: number = 30) {
        this.currentUser = {
            username: '',
            email: 'my_mail@mail.com',
            password: 'myPassword',
            age: 30
        }
    }
    isAuthenticated() {
        return !!this.currentUser;
    }
    updateCurrentUserEmailPass (email: string, password: string) {
        this.currentUser.email = email
        this.currentUser.password = password
    }
    updateCurrentUser(username: string, email: string, age: number) {
        this.currentUser.username = username
        this.currentUser.email = email
        this.currentUser.age = age
    }
}