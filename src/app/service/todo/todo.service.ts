import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Todo } from './todo';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoList() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

}
