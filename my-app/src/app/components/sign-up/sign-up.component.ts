import { NgForm } from '@angular/forms';
import { AuthServices } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private autServe:AuthServices) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;

     this.autServe.signUp(email,password).subscribe(responseData=>{
      console.log(responseData)
     });
    
  }
}
