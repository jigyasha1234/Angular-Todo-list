import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos?:Todo[];
  constructor() {
    
  }
  ngOnInit(): void {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }else{
      this.todos=[];
    }
  }
  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos?.indexOf(todo);
    console.log(index);
    if(index !== undefined){
    this.todos?.splice(index,1);}
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos?.push(todo);
     localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo){
    const index = this.todos?.indexOf(todo);
    console.log(index);
    if(index !== undefined){
    this.todos?this.todos[index].active = !this.todos[index].active:false;
  }
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
