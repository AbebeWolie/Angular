import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostservicesService {
  post=[]
  error=new Subject<string>();
  constructor(private http:HttpClient) { }


  onCreatePost(post:{title:string,content:string}){
    
   return this.http.post('https://myecommercewebsite-db732-default-rtdb.firebaseio.com/posts.json',post)
  }


  Feche(){
   return this.http.get('https://myecommercewebsite-db732-default-rtdb.firebaseio.com/posts.json',{
    headers: new HttpHeaders({"custom":"Hello This Is My Header"})
   }).pipe(map(data=>{
      
      for(const key in data){
        if(data.hasOwnProperty(key)){
          this.post.push({...data[key],id:key})
        }
        
      }
      return this.post
    }))
  }

  DeletPost(){
    return this.http.delete('https://myecommercewebsite-db732-default-rtdb.firebaseio.com/posts/.json/')
  }

}

