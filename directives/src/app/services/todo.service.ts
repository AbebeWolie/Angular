import { Todo } from 'src/app/modules/Todo';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers:new HttpHeaders({
    'content-type':'appliction/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todourl:string='https://jsonplaceholder.typicode.com/todos'
  todoLimit='?_limit=10'
  constructor(private htttp:HttpClient) { }

getTodos():Observable<Todo[]>{
 return this.htttp.get<Todo[]>(`${this.todourl}${this.todoLimit}`);

}

deleteTodo(todo:Todo):Observable<Todo>{
  const url =`${this.todourl}/${todo.id}`
  return this.htttp.delete<Todo>(url,httpOptions)
}

toggeleCompleted(todo:Todo):Observable<any>{
const url =`${this.todourl}/${todo.id}`
  return this.htttp.put(url,todo,httpOptions);
}

addTodo(todo:Todo):Observable<Todo>{
  return this.htttp.post<Todo>(this.todourl,todo,httpOptions);
}

}