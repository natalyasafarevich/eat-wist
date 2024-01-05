import {ActionsType, SEARCH_PARAMS, getParamsT} from './actions';
export type DataParams = {
  data: {
    title: string;
    sortBy: string;
    criteria: string;
    additives: string;
    palmOil: string;
  };
};
let defaultState: DataParams = {
  data: {title: '', sortBy: '', criteria: '', additives: '', palmOil: ''},
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
