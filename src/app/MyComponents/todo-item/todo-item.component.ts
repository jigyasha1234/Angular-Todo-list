import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
@Input() todo?: Todo;
@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
@Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
constructor(){

}
ngOnInit(): void {

}
onClick(todo?: Todo){
  this.todoDelete.emit(todo);
  console.log("jigyasha");
}
onCheckBoxClick(todo?: Todo){
  this.todoCheckbox.emit(todo);
  console.log(todo);
}
}
