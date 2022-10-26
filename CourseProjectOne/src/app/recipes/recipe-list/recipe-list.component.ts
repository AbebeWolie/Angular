import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  hi=false
 @Output() recipewasselected= new EventEmitter<Recipe>();
 recipes:Recipe[]=[new Recipe('Abebe','Test','https://th.bing.com/th/id/R.776c6de2295e95d9f13382849b1f7bdb?rik=GPS4xZw6bLiA%2bg&pid=ImgRaw&r=0'),
 new Recipe('Abebe','Test','https://th.bing.com/th/id/R.776c6de2295e95d9f13382849b1f7bdb?rik=GPS4xZw6bLiA%2bg&pid=ImgRaw&r=0'),
 new Recipe('Kebede','Test','https://th.bing.com/th/id/R.776c6de2295e95d9f13382849b1f7bdb?rik=GPS4xZw6bLiA%2bg&pid=ImgRaw&r=0')
];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipewasselected.emit(recipe);
  }

  clicked(){
    this.hi = !this.hi;
  }

}
