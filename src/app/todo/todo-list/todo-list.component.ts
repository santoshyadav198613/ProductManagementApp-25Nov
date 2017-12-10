import { Component, OnInit } from '@angular/core';

import { HttpEventType, HttpResponse } from '@angular/common/http';

import { TodoService } from '../../service/todo/todo.service';

import { Todo } from '../../service/todo/todo';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];
  constructor(private todoService: TodoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => this.todoList =data['todoList']
    );
    // this.todoService.getTodoList().subscribe(
    //   (data) => { this.todoList = data; },
    //   (err) => console.log(err)
    // );

    this.todoService.getPhotos().subscribe(
      (event) => {
        if (event.type === HttpEventType.DownloadProgress) {
          console.log(event.loaded);
          console.log(event.total);
        }
        else if (event instanceof HttpResponse) {
          console.log(event.body);
        }
      },
      (err) => console.log(err)
    );
  }

}
