import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 
  todos:string[] = ['go to gym' , 'work until 5pm' , 'watch football matching' ]
  newTodo: string = ""
  addingTodo:string = ''
  constructor() { }

  ngOnInit(): void {
  }
  addTodo(todo:string): void {
   this.todos.push(todo)
 }
 removeTodo(index:number): void {
  this.todos.splice(index, 1)
}
updateTodo(index:number ,newTodo:string): void {
  this.todos[index] = newTodo
}

}
