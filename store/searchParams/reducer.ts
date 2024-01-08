import {ActionsType, SEARCH_PARAMS, getParamsT} from './actions';
export type DataParams = {
  data: {
    title: string;
    sortBy: string;
    country: string;
    additives: string;
    nutrition_grades: string;
    brands: string;
    page_number: number;
  };
};
let defaultState: DataParams = {
  data: {
    title: '',
    sortBy: '',
    country: '',
    additives: '',
    nutrition_grades: '',
    brands: '',
    page_number: 1,
  },
};
export const searchParamsReducer = (
  state = defaultState,
  action: ActionsType,
): DataParams => {
  switch (action.type) {
    case SEARCH_PARAMS: {
      const clone = structuredClone(state);
      clone.data = action.data;
      return clone;
    }
    default:
      return state;
  }
};
