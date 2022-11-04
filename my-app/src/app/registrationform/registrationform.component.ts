import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  name:string =''
  email:string=''
  password:string=''
  @ViewChild('f') signupForm:NgForm

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signupForm)
    this.http.post('https://myecommercewebsite-db732-default-rtdb.firebaseio.com/PersonalInfo.json',this.signupForm.value).subscribe(data=>{
      console.log(data);
    })
  }

}
