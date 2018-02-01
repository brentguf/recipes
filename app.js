import { createStore } from 'redux';

const reducer = (state, action) => {
  switch(action) {
    case 'INC':
      return state + 1;
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

store.subscribe(() => document.getElementById('app').innerText = store.getState());

document.getElementById('app').innerText = store.getState();
