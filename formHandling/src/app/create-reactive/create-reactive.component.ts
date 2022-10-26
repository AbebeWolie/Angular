import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-reactive',
  templateUrl: './create-reactive.component.html',
  styleUrls: ['./create-reactive.component.css']
})
export class CreateReactiveComponent implements OnInit {
 signupForm:FormGroup;
 trial:FormControl;
 gender = ['male','female']
  constructor() { }

  ngOnInit(){
    this.signupForm =new FormGroup({
      "userData":new FormGroup({
        "username":new FormControl(null,Validators.required),
        "email":new FormControl(null,[Validators.required,Validators.email]),
      }),
      "gender":new FormControl(null),
    })

    // this.signupForm.valueChanges.subscribe((value)=>console.log(value))
    this.signupForm.patchValue({
      "userData":({
        "username":'Abe',
        "email":'abe@gc'
      }),

      "gender":'male'
      })
  }

  reactiveSubmit(){
    console.log(this.signupForm)
  }


 

}
