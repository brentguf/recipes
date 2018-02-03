import { ADD_RECIPE } from '../constants/action-types'

const addRecipe = (name) => (
  { type: ADD_RECIPE, name: name }
);

const setRecipes = (recipes) => {
  { type: SET_RECIPES, recipes: recipes }
}

export default addRecipe;