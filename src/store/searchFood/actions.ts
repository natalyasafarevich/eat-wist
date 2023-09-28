import { Dispatch } from 'redux';
import { searchFood } from '../../API/foodApi';
import { ListT } from './moduls';

export const GET_SEARCH_FOOD = './searchFood/GET_SEARCH_FOOD';

export type ActionType = {
  type: typeof GET_SEARCH_FOOD;
  result: ListT;
}

export const getSearchFood = (value: string, page_number: string, dataType: string, sort: string) => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      const response = await searchFood(value, page_number, dataType, sort);
      const data = await response.data;
       dispatch({ type: GET_SEARCH_FOOD, result: data });
    } catch (e) {
      // Обработка ошибок
    }
  };
}
