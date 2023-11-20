import {CategoriesInitialStateProps} from './../../../types/categoriesType';
import {cloneDeep} from 'lodash';
import {
  ActionsType,
  SET_FOOD_CATEGORY,
} from './actions';

const initialState: CategoriesInitialStateProps =
  {
    list: {
      totalHits: 0,
      currentPage: 0,
      totalPages: 0,
      pageList: [],
      foods: [],
    },
  };

export const FoodCategoriesReduser = (
  state = initialState,
  action: ActionsType,
): CategoriesInitialStateProps => {
  switch (action.type) {
    case SET_FOOD_CATEGORY:
      const clone = cloneDeep(state);
      clone.list = action.categories;
      return clone;

    default:
      return state;
  }
};
