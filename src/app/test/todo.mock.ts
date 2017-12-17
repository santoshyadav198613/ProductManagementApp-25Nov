import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Todo } from '../service/todo/todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class TodoMockService {

    todo: Todo[];

    constructor(isAdmin: boolean= true, private http?: HttpClient) {
        console.log(isAdmin);
    }

    getTodoList() {
        this.todo = [
            { id: 1, title: 'test', userId: 45, completed: true },
            { id: 3, title: 'test', userId: 46, completed: false }
        ]
        return Observable.of( this.todo);
    }

}
