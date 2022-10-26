import { Ingredient } from './../shared/ingredinet.model';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  removeEvent=new EventEmitter<any>();
 eventaccepter:any;
 name:string;
 amount:number;
 price:number;
 pval=null
 mval=null
 val=''
 errorMessagge=''
 ingredient:Ingredient[] = [];

  constructor() {
   }

  ngOnInit(): void {
  }

  clear(){
    this.ingredient=null;
    console.log('Data Is Cleared')
  }

  // removename(event:Event){
  //  this.eventaccepter= this.removeEvent.emit(event);
  //  console.log(this.eventaccepter)
  // }

  // deleted(){
  //   if(this.name===this.eventaccepter){
  //     this.name='';
  //     this.amount=null;
  //     this.price=null;
  //   }
  //   console.log('Deleted')
  // }
  namein(namie:any){
    this.name=namie
    this.val=namie


  }

  amountin(amountie:any){
    this.amount=amountie
    this.mval=amountie
  }
  pricein(price:number){
    this.price=price
    this.pval=price
  }

  addIngredient(){
    this.errorMessagge=this.name
    if(!this.errorMessagge){
      this.errorMessagge="Name Cann't be Empty"
      return
    }
    else{
      this.errorMessagge=''
      this.val=''
      this.mval=null
      this.pval=null
      this.ingredient.push(new Ingredient(this.name,this.amount,this.price))
      console.log(this.ingredient)
      console.log('clicked')
    }
  }

  // deleteIngredient(name){
    
  // }
  
}
