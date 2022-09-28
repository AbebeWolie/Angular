import { Ingredient } from './../shared/ingredinet.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

 name:string;
 amount:number;
 price:number;
 errorMessagge=''
 ingredient:Ingredient[] = [];

  constructor() {
   }

  ngOnInit(): void {
  }

  namein(namie:any){
    this.name=namie

  }

  amountin(amountie:any){
    this.amount=amountie
  }
  pricein(price:number){
    this.price=price
  }

  addIngredient(){
    this.errorMessagge=this.name
    if(!this.errorMessagge){
      this.errorMessagge="Name Cann't be Empty"
      return
    }
    else{
      this.errorMessagge=''
      this.ingredient.push(new Ingredient(this.name,this.amount,this.price))
      console.log(this.ingredient)
      console.log('clicked')
    }
  }

  deleteIngredient(name){
    
  }
  
}
