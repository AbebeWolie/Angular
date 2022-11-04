import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { PostservicesService } from '../postservices.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  title:string;
  content:string;
  private errorsub =new Subscription
  


  constructor(private http:HttpClient,private post:PostservicesService) { }
  

  ngOnInit(): void {
    // this.http.get('https://myecommercewebsite-db732-default-rtdb.firebaseio.com/posts.json').subscribe(post=>{
    //   console.log(post)
    // })
  }

  onCreatePost(post:any){

    this.post.onCreatePost(post).subscribe(responseData=>{
      console.log(responseData)
    })
  }

  // Feche(){
  //   this.http.get('https://myecommercewebsite-db732-default-rtdb.firebaseio.com/posts.json').subscribe(carts=>{
  //     console.log(carts);
  //   })
  // }
}
