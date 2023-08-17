import { combineReducers } from 'redux';
import { FoodListReduser } from './foods-list/reduser';
import { ProductReduser } from './product/reduser';
import { FoodCategoriesReduser } from './categories/reduser';
// import {combineReducers} from "redux";

export default combineReducers({
  fList:FoodListReduser,
  descProd: ProductReduser,
  category : FoodCategoriesReduser,
});


// export type RootState = ReturnType<typeof store.fList>