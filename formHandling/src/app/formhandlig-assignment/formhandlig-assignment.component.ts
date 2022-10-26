import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formhandling-assignment',
  templateUrl: './formhandlig-assignment.component.html',
  styleUrls: ['./formhandlig-assignment.component.css']
})
export class FormhandligAssignmentComponent implements OnInit {
 practiceForm:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.practiceForm = new FormGroup({
      "name":new FormControl(null,Validators.required),
      "email":new FormControl(null,[Validators.email,Validators.required]),
      "status":new FormControl()
    })
  }

}
