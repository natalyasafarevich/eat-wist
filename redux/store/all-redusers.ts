import {combineReducers} from 'redux';
import {FoodCategoriesReduser} from './categories/reduser';
import {SearchFoodReduser} from './searchFood/reduser';
// import {combineReducers} from "redux";

export default combineReducers({
  category: FoodCategoriesReduser,
  searchFood: SearchFoodReduser,
});

// export type RootState = ReturnType<typeof store.fList>
