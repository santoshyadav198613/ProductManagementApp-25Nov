import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest } from '@angular/common/http';

import { Todo } from './todo';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoList() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  addTodo(todo: Todo) {
    return this.http.post('https://jsonplaceholder.typicode.com/todos', todo);
  }

  getPhotos() {
    let httpRequest = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', { reportProgress : true });
    return this.http.request(httpRequest);
  }

}
