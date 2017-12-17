import { LoginService } from '../login/login.service';
import { HttpClient } from '@angular/common/http';
import { TodoService } from './todo.service';

export function todoFactoryProvider(loginService: LoginService, http: HttpClient) {
    return new TodoService(loginService.isAdmin, http);
}

export let todoFactory = {
    provide: TodoService,
    useFactory: todoFactoryProvider,
    deps: [LoginService, HttpClient]
}