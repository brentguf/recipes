import addRecipe from './actions/recipes';
import addIngredient from './actions/ingredients';
import store from './store/store';
import loadUI from './ui';

loadUI();

store.dispatch(addRecipe('Spring Rolls'));
store.dispatch(addIngredient('Spring Rolls', 'rice paper', 8));

