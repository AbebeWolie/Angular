import { Ingredient,home} from './../../shared/ingredinet.model';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BinaryOperatorExpr } from '@angular/compiler';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  userForm:Ingredient[]=[]
  name=''
  amount=''
  amountarray=[]
  namearray=[]

  constructor() { 

  }

  namein(namie:any){
    this.name=namie

  }

  amountin(amountie:any){
    this.amount=amountie
  }

  add(){
    this.amountarray.push(this.amount)
    console.log(this.amountarray)
    this.namearray.push(this.name)
    console.log(this.namearray)
    

  }


  ngOnInit() {

  }



  addIngredient(){
    
  }

  onsubmit(){
  }
  addform(){
    
  }

  remove(index){
  }
}
