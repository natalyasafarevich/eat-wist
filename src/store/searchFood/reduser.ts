import {cloneDeep} from "lodash";
import {ActionType, GET_SEARCH_FOOD} from "./actions";
import {Product} from "../../moduls/types-interfaces/Product";
import {InitialStateProps} from "../foods-list/modules";

const initialState: InitialStateProps = {
  list: []
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
