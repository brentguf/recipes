const ingredientsReducer = (ingredients = [], action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      const newIngredient = {
        recipe: action.recipe,
        name: action.name,
        quantity: action.quantity
      };
      return ingredients.concat(newIngredient)
    default:
      return ingredients;
  }
}

export default ingredientsReducer;