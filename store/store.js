import { createStore } from 'redux';
import reducer from '.././root';

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

export default store;