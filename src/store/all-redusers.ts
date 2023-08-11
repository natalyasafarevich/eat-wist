import { combineReducers } from 'redux';
import { FoodListReduser } from './foods-list/reduser';
// import {combineReducers} from "redux";

export default combineReducers({
  fList:FoodListReduser
});


// export type RootState = ReturnType<typeof store.fList>