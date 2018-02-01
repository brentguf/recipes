import { ADD_RECIPE } from '../constants/action-types'

const addRecipe = (name) => (
  { type: ADD_RECIPE, name: name }
);

export default addRecipe;