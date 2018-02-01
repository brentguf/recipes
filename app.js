import { createStore } from 'redux';

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_RECIPE':
      return { ...state, 
        recipes: [...state.recipes, { action: action.name }] 
      }
    default:
      return state;
  }
}

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

const store = createStore(reducer, initialState);
window.store = store;

store.subscribe(() => document.getElementById('app').innerText = store.getState());
document.getElementById('app').innerText = store.getState();

store.dispatch({ type: 'ADD_RECIPE', name: 'Spring rolls' });