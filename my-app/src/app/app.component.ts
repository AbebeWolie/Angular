import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('form') testForm:NgForm
  title:string;
  content:string;
  post:{title:string,contet:string}



  constructor(private http:HttpClient){}
  ngOnInit(): void {
    // this.http.get('https://myecommercewebsite-db732-default-rtdb.firebaseio.com/posts.json').subscribe(post=>{
    //   console.log(post)
    // })
  }



  // onCreatePost(){
  //   console.log(this.testForm.value)
  //   this.http.post('https://myecommercewebsite-db732-default-rtdb.firebaseio.com/posts.json',this.testForm.value).subscribe()
  // }

  // Feche(){
  //   this.http.get('https://myecommercewebsite-db732-default-rtdb.firebaseio.com/posts.json').subscribe(carts=>{
  //     console.log(carts)
  //   })
  // }
 

}
