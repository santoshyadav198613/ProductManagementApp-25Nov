import { Component, OnInit } from '@angular/core';

import { Todo } from '../service/todo/todo';

import { TodoService } from '../service/todo/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
  // providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todo: Todo = new Todo();
  constructor(private todoService : TodoService) { }

  ngOnInit() {
  }

  save(){
      this.todoService.addTodo(this.todo).subscribe(
        (data) => console.log(data),
        (err) => console.log(err)
      );
      this.todo = new Todo();
  }

}
