import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredinet.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredient:Ingredient[] = [ new Ingredient('apple',5),new Ingredient('mano',3)];
  constructor() { }

  ngOnInit(): void {
  }

}
