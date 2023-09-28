import {getFoodsList} from "../../API/foodApi";
import {Dispatch} from 'redux';
import {ListType} from "./modules";
export const SET_FOOD_LIST = 'trailers/SET_MAIN_PAGE';

// dispatch - this's action/s

export type FoodListActionType = {
  type: typeof SET_FOOD_LIST,
  list: Array < ListType > ,
}

export type ActionsType = FoodListActionType;

export const foodList = (page : string,dataType:string) => {
  return async (dispatch : Dispatch < ActionsType >) : Promise < void > => {
    try {
      const response = await getFoodsList(page, dataType);
      const data = await response.data;
      dispatch({type: SET_FOOD_LIST, list: data});
    } catch (e) { // Обработка ошибок
    }
  };

}

