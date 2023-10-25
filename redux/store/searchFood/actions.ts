import {searchFood} from '@/app/api/food';
import {Dispatch} from 'redux';
// import { searchFood } from '../../API/foodApi';
// import { Product } from '../../moduls/types-interfaces/Product';
// import { ListType } from '../foods-list/modules';

export const GET_SEARCH_FOOD =
  './searchFood/GET_SEARCH_FOOD';
type FoodSearchCriteriaT = {
  query: string;
  pageNumber: number;
  sortBy: string;
  sortOrder: string;
};
type ListT = {
  // foods: Array < ListType >,
  foods: Array<any>;

  foodSearchCriteria: FoodSearchCriteriaT;
  pageList: Array<number>;
};
type InitialStateProps = {
  list: ListT;
};
export type ActionType = {
  type: typeof GET_SEARCH_FOOD;
  result: ListT;
};

export const getSearchFood = (
  value: string,
  page_number: string,
  dataType: string,
  sort: string,
) => {
  return async (
    dispatch: Dispatch<ActionType>,
  ) => {
    try {
      const response = await searchFood(
        value,
        page_number,
        dataType,
        sort,
      );
      const data = await response.data;
      dispatch({
        type: GET_SEARCH_FOOD,
        result: data.foods,
      });
    } catch (e) {
      // Обработка ошибок
    }
  };
};
