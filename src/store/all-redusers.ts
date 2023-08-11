import { combineReducers } from 'redux';
import { FoodListReduser } from './foods-list/reduser';
import { ProductReduser } from './product/reduser';
// import {combineReducers} from "redux";

export default combineReducers({
  fList:FoodListReduser,
  descProd: ProductReduser
});


// export type RootState = ReturnType<typeof store.fList>