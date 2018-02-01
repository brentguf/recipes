import { createStore } from 'redux';

const initialState = {
  recipes: [
    {
      name: 'Smoothie'
    }
  ],
  ingredients: [
    {
      recipe: 'Smoothie',
      name: 'banana',
      quantity: 2
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return Object.assign({},
        state, 
        { recipes: state.recipes.concat({ name: action.name }) }
      );
    case 'ADD_INGREDIENT':
      const newIngredient = {
        recipe: action.recipe,
        name: action.name,
        quantity: action.quantity
      };
      return Object.assign({},
        state,
        { ingredients: state.ingredients.concat(newIngredient) }
      );
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);
window.store = store;

store.subscribe(() => document.getElementById('app').innerText = store.getState());
document.getElementById('app').innerText = store.getState();

store.dispatch({ type: 'ADD_RECIPE', name: 'Spring rolls' });

const addIngredient = (recipe, name, quantity) => ({ type: 'ADD_INGREDIENT', recipe, name, quantity })
store.dispatch(addIngredient('Spring Rolls', 'rice paper', 8));
