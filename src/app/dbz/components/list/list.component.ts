import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: "Trunks",
    power: 10
  }]

  // onDelete = Index value:number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

//   onDeleteCharacter(index:number):void {
// this.onDelete.emit(index);
//   }

  deleteCharacterById(id?:string):void{
    if(!id) return;
    this.onDelete.emit(id)
  }
}
