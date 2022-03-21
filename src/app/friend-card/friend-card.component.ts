import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css']
})
export class FriendCardComponent {
  @Input() friends!: any
  @Output() friendClick = new EventEmitter<string>()
  constructor() { }

  addFriend(value:string) {
    this.friendClick.emit(value)
  }
}
