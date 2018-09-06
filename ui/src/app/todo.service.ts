import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }
  //methos to issue HTTP request to backend API
  getTodoList() {
    return this.httpClient.get(environment.gateway + '/todo');
  }

  addTodo(todo: Todo) {
    return this.httpClient.post(environment.gateway + '/todo', todo);
  }

  completeTodo(todo: Todo) {
    return this.httpClient.put(environment.gateway + '/todo', todo);
  }

  deleteTodo(todo: Todo) {
    return this.httpClient.delete(environment.gateway + '/todo/' + todo.id);
  }
}


export class Todo {
  id: string;
  message: string;
  complete: boolean;
}
