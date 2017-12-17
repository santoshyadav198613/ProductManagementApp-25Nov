import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

import { AuthGuard } from '../service/guard/auth.guard';
import { TodoResolveGuard } from '../service/todo/todo-resolve.guard';
import { TodoService } from '../service/todo/todo.service';

import { todoFactory } from '../service/todo/todo-factory';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: TodoComponent, canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        resolve: {
          todoList: TodoResolveGuard
        },
        children: [
          { path: ':id', component: TodoDetailsComponent }
        ]
      },
      // { path: 'todo/:id', component: TodoDetailsComponent }
    ])
    // FormsModule
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoDetailsComponent
  ],
  providers: [todoFactory, TodoResolveGuard]
  // exports: [FormsModule]
})
export class TodoModule { }
