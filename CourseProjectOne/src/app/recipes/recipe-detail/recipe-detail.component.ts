import { Recipe } from './../recipe.model';
import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() display=new EventEmitter<string>();
 @Input() recipe:Recipe

  constructor() { }

  ngOnInit(): void {
  }
  classcheng(){

  }
}
