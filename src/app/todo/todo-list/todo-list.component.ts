import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../service/todo/todo.service';

import { Todo } from '../../service/todo/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList().subscribe(
      (data) => { this.todoList = data; },
      (err) => console.log(err)
    );
  }

}
