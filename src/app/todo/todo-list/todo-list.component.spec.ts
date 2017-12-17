import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestingModule } from '../../app-testing/app-testing.module';
import { TodoListComponent } from './todo-list.component';
import { RouterModule } from '@angular/router';
describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [AppTestingModule,RouterModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get todo List', () => {
    component.ngOnInit();
    fixture.detectChanges();
    console.log(component.todoList);
    expect(component.todoList.length).toBe(2);
  });
});
