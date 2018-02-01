import { createStore } from 'redux';

const reducer = (state, action) => {
  switch(action) {
    case 'INC':
      return state + 1;
    default:
      return state;
  }
}

const initialState = 0;

const store = createStore(reducer, initialState);

store.subscribe(() => document.getElementById('app').innerText = store.getState());

