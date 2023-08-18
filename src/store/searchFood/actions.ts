import {Dispatch} from 'redux';
import {searchFood} from '../../API/foodApi';
import {Product} from '../../moduls/types-interfaces/Product';
import {  ListType } from '../foods-list/modules';

export const GET_SEARCH_FOOD = './searchFood/GET_SEARCH_FOOD';

export type ActionType = {
  type: typeof GET_SEARCH_FOOD,
  result: Array < ListType >
}
export const getSearchFood = (value : string, page_number : string) => {
  return async (dispatch : Dispatch < ActionType >) => {
    try {
      const response = await searchFood(value, page_number);
      const data = await response.data;
      dispatch({type: GET_SEARCH_FOOD, result: data})
    } catch (e) {}
  }
}
