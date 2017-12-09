import { Component, OnInit } from '@angular/core';

import { TodoService } from '../service/todo/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
