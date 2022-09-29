import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/modules/Todo';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Output() deleteTodo:EventEmitter<Todo>= new EventEmitter();
  @Input() todo:Todo;
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }




  setclass(){
    let classes={
      todo:true,
      'is-completed':this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    todo.completed=!todo.completed
    // this.todoService.toggeleCompleted(todo).subscribe(todo=>{
    //   this.todo=todo
    // })
    console.log('toggle')
  }


  onDelete(todo:Todo){
    this.deleteTodo.emit(todo)
    console.log('Delete me')
  }

}
