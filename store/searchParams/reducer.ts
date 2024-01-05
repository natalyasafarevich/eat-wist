import {ActionsType, SEARCH_PARAMS, getParamsT} from './actions';
export type DataParams = {
  data: {
    title: string;
    sortBy: string;
    country: string;
  };
};
let defaultState: DataParams = {
  data: {title: '', sortBy: '', country: ''},
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
