import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FriendsService } from '../friends.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  searchTerm!: string;
  searchedGames: any;
  list: any[] = [];
  gamesArray = this.friendservice.gamesArray;
  tagsFilter: string[] = [];

  constructor(private router: Router, private friendservice: FriendsService, private auth: AuthService) { }

  ngOnInit(): void {
    this.redirectToLogin()
    this.searchedGames = this.friendservice.gamesArray;
    this.list = [
      {
        id: 1,
        tag: 'Strategy',
        checked: true
      },
      {
        id: 2,
        tag: 'Action',
        checked: true
      },
      {
        id: 3,
        tag: 'Zombie',
        checked: true
      }
    ]
  }

  redirectToLogin() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login'])
    }
  }

  searchGames(searchTerm: string) {
    searchTerm = searchTerm.toLocaleLowerCase()
    console.log(searchTerm)
    this.searchedGames = this.gamesArray.filter((game: any) =>
    game.name.toLocaleLowerCase().includes(searchTerm));
    console.log('this.searchedGames:', this.searchedGames)
    return this.searchedGames;
  }

  handleGameClicked(game: any) {
    console.log('received', game)
    this.friendservice.myLibraryArray.push(game)
    this.searchedGames = this.searchedGames.filter((el: any) => el !== game)
    console.log('this.friendservice.myLibrary', this.friendservice.myLibraryArray)
  }

  filterByRange(value: string) {
    if (value === '0') {
      this.searchedGames = this.gamesArray.filter((game: any) =>
      game.price.includes('150 UAH'));
    } else if (value === '1') {
        this.searchedGames = this.gamesArray.filter((game: any) =>
        game.price.includes('180 UAH'));
    } else if (value === '2') {
        this.searchedGames = this.gamesArray.filter((game: any) =>
        game.price.includes('200 UAH'));
    }
  }

  filterByTag(tag: any) {
    if (this.tagsFilter.includes(tag)) {
      this.tagsFilter = this.tagsFilter.filter(el => el !== tag)
    } else {
      this.tagsFilter.push(tag)
    }
    if (this.tagsFilter.length === 0) {
      this.searchedGames = this.gamesArray
      return this.searchedGames
    } else if (this.tagsFilter.length === 3) {
      this.searchedGames = []
      return this.searchedGames
    } else if (this.tagsFilter.includes('Strategy') && (this.tagsFilter.includes('Action'))) {
        return this.searchedGames = this.gamesArray.filter((game: any) => game.tag.includes('Zombie'))
    } else if (this.tagsFilter.includes('Strategy') && (this.tagsFilter.includes('Zombie'))) {
        return this.searchedGames = this.gamesArray.filter((game: any) => game.tag.includes('Action'))
    } else if (this.tagsFilter.includes('Zombie') && (this.tagsFilter.includes('Action'))) {
        return this.searchedGames = this.gamesArray.filter((game: any) => game.tag.includes('Strategy'))
    } else if (this.tagsFilter.includes('Zombie')) {
      let arr1 = this.gamesArray.filter((game: any) => game.tag.includes('Strategy'))
      let arr2 = this.gamesArray.filter((game: any) => game.tag.includes('Action'))
      this.searchedGames = arr1.concat(arr2)
      return this.searchedGames
    } else if (this.tagsFilter.includes('Strategy')) {
      let arr1 = this.gamesArray.filter((game: any) => game.tag.includes('Zombie'))
      let arr2 = this.gamesArray.filter((game: any) => game.tag.includes('Action'))
      this.searchedGames = arr1.concat(arr2)
      return this.searchedGames
    } else if (this.tagsFilter.includes('Action')) {
      let arr1 = this.gamesArray.filter((game: any) => game.tag.includes('Strategy'))
      let arr2 = this.gamesArray.filter((game: any) => game.tag.includes('Zombie'))
      this.searchedGames = arr1.concat(arr2)
      return this.searchedGames
    }
  }
}
