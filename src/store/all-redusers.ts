import { combineReducers } from 'redux';
import { FoodListReduser } from './foods-list/reduser';
import { ProductReduser } from './product/reduser';
import { FoodCategoriesReduser } from './categories/reduser';
import { SaveDataReduser } from './saveData/reduser';
import { SearchFoodReduser } from './searchFood/reduser';
// import {combineReducers} from "redux";

export default combineReducers({
  fList:FoodListReduser,
  descProd: ProductReduser,
  category : FoodCategoriesReduser,
  saveData :SaveDataReduser,
  searchFood :SearchFoodReduser
});


// export type RootState = ReturnType<typeof store.fList>