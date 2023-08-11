import {cloneDeep} from "lodash";
import {ActionsType, FoodListActionType, SET_FOOD_LIST} from "./action";
import { InitialStateProps } from "./modules";

const initialState: InitialStateProps = {
  list: []
}

export const FoodListReduser = (state = initialState, action : ActionsType  ):InitialStateProps  => {

  switch (action.type) {

    case SET_FOOD_LIST:
      const clone = cloneDeep(state);
      clone.list = action.list;
      return clone;

    default:
      return state
  }
}
