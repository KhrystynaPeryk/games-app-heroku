import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  @Input() games!: any
  @Output() gameClick = new EventEmitter<string>()
  constructor() { }

  addGame(value:string) {
    this.gameClick.emit(value)
  }
}
