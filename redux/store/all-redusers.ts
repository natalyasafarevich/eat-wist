import {combineReducers} from 'redux';
import {FoodCategoriesReduser} from './categories/reduser';
// import {combineReducers} from "redux";

export default combineReducers({
  category: FoodCategoriesReduser,
});

// export type RootState = ReturnType<typeof store.fList>
