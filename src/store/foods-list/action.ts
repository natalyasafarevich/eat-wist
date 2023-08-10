import {getFoodsList} from "../../API/foodApi";

export const SET_FOOD_LIST = 'trailers/SET_MAIN_PAGE';

type FoodListProps = {
  page: string
}

export function foodList({ page }: FoodListProps) {
  return async (dispatch: (action: { type: string; list: any }) => void) => {
    try {
      const response = await getFoodsList(page);
      const data = await response.data;
      dispatch({ type: SET_FOOD_LIST, list: data });
    } catch (e) {
      // Обработка ошибок
    }
  };
}