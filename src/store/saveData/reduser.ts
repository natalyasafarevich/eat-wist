import {cloneDeep} from "lodash";

import {Product} from "../../moduls/types-interfaces/Product";
import {getSaveDataType, GET_SAVE_DATA} from "./actions";



const initialState = {
  localData: {}
}
export const SaveDataReduser = (state = initialState, action : getSaveDataType) => {

  switch (action.type) {
    case GET_SAVE_DATA:
      const clone = cloneDeep(state);
      clone.localData = action.data;
      return clone;

    default:
      return state
  }
}
