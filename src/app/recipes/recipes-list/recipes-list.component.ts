import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  recipeSelected = new EventEmitter();
  recipe = new Recipe('Elon Musk','musk','http://cuulgeek.com.ng/wp-content/uploads/2016/09/Elon-Musk.jpg');

  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
