import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Tarte au citron',
      'La meilleure recette au monde',
      'https://www.encoreungateau.com/wp-content/uploads/2018/04/tarte-citron-cap-2.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeItemSelected.emit(recipe);
  }
}