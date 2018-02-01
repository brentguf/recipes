import addRecipe from './actions/recipes';
import addIngredient from './actions/ingredients';
import store from './store/store';

document.getElementById('app').innerText = store.getState();

store.dispatch(addRecipe('Spring Rolls'));
store.dispatch(addIngredient('Spring Rolls', 'rice paper', 8));

window.store = store;
