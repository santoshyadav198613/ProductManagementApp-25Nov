import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Todo } from './todo';

import { TodoService } from './todo.service';

@Injectable()
export class TodoResolveGuard implements Resolve<Todo[]>  {

  constructor(private todoService: TodoService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> | Promise<Todo[]> | Todo[] {
    return this.todoService.getTodoList();
  }
}
