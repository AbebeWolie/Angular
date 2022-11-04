import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { style } from '@angular/animations';
import{ Component, OnInit} from '@angular/core';
import { PostservicesService } from '../postservices.service';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit{
 post=[];
 error=null;
 
    constructor(private http:HttpClient,private postServ:PostservicesService){}
  ngOnInit(): void {
    
  }

    


    Feche(){
        // this.http.get('https://myecommercewebsite-db732-default-rtdb.firebaseio.com/posts.json').pipe(map(data=>{
          
        //   for(const key in data){
        //     if(data.hasOwnProperty(key)){
        //       this.post.push({...data[key],id:key})
        //     }
            
        //   }
        //   return this.post
        // })).subscribe(carts=>{
        //   console.log(carts);
          
        // })
        this.postServ.Feche().subscribe({next:(dat)=>{
          this.post=dat
          console.log(dat)
        },error:(error)=>{
          this.error=error.message;
        }})
      }

      onhandl(){
        this.error=null
      }

      Delete(){
        this.postServ.DeletPost().subscribe(data=>{
          console.log('The Data Is Deleted')
          this.post=[]
        })
      }

}