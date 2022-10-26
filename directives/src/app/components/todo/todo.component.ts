import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/modules/Todo';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[];
  data=[]
  constructor(private services:TodoService) {

   }

  ngOnInit(){
   this.services.getTodos().subscribe(todos=>{
    this.todos=todos;
   });

}

getd(){
  this.data =this.services.getData()
  console.log(this.data)
}

deleteTodo(todo:Todo){
  // Remove From Ui
  this.todos=this.todos.filter(t=>t.id !== todo.id);
  // remove from server
  this.services.deleteTodo(todo).subscribe();
}

addTodo(todo:Todo){

  this.services.addTodo(todo).subscribe(todo=>{
    this.todos.push(todo);
  });

}

}