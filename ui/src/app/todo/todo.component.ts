import { Component, OnInit } from '@angular/core';
import {TodoService, Todo } from '../todo.service';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  activeTodos: Todo[];
  completedTodos: Todo[];
  todoMessage: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getAll();
  }
  /*
  So, the getAll function subscribes to data from the todoService.getTodoList and, whenever data is received, 
  it assigns all active todos to your activeTodos property 
  (by filtering out any complete items) and do the opposite for the completedTodos property.
  */
  getAll() {
    this.todoService.getTodoList().subscribe((data: Todo[]) =>{
      this.activeTodos = data.filter((a) => !a.complete);
      this.completedTodos = data.filter((a) => a.complete)
    })
  }

  addTodo() {
    var newTodo : Todo = {
      message: this.todoMessage,
      id: '',
      complete: false
    };

    this.todoService.addTodo(newTodo).subscribe(() =>{
      this.getAll();
    });
  
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(() => {
      this.getAll();
    })
  }
}
