import { createStore } from 'redux';
import reducer from '../reducers/root';

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

export default store;