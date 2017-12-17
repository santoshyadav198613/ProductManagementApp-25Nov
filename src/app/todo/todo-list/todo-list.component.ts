import { Component, OnInit } from '@angular/core';

import { HttpEventType, HttpResponse } from '@angular/common/http';

import { TodoService } from '../../service/todo/todo.service';

import { Todo } from '../../service/todo/todo';

import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];
  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
    // this.route.data.subscribe(
    //   (data) => this.todoList = data['todoList']
    // );
    this.todoService.getTodoList().subscribe(
      (data) => { this.todoList = data; },
      (err) => console.log(err)
    );

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

  edit(todo: Todo) {
    let dialogRef = this.dialog.open(TodoEditComponent, {
      data: todo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
