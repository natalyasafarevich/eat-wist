import {cloneDeep} from "lodash";
import {ActionType, GET_SEARCH_FOOD} from "./actions";
import {InitialStateProps} from "./moduls";

const initialState: InitialStateProps = {
  list: {
    foods: [],
    foodSearchCriteria: {
      query: '',
      pageNumber: 0,
      sortBy: "",
      sortOrder: ''
    },
    pageList: []

  }
}
export const SearchFoodReduser = (state = initialState, action : ActionType) : InitialStateProps => {

  switch (action.type) {
    case GET_SEARCH_FOOD:
      const clone = cloneDeep(state);
      clone.list = action.result;
      return clone;

    default:
      return state
  }
}
