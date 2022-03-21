import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-added-friend',
  templateUrl: './added-friend.component.html',
  styleUrls: ['./added-friend.component.css']
})
export class AddedFriendComponent {

  @Input() friends!: any
  @Output() removeClick = new EventEmitter<string>()
  constructor() { }

  removeFriend(value:string) {
    this.removeClick.emit(value)
  }
}
