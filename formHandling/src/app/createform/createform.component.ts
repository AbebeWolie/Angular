
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {

 @ViewChild('form') signupForm:NgForm
 name = '';
 email = '';
 gender = ['Male','Femal']
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signupForm)
  }
}
