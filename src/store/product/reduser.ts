import {cloneDeep} from "lodash";
import {ActionsType, SET_PRODUCT} from "./action";
import {Product} from "../../moduls/types-interfaces/Product";


type initialStateProps = {
  product: Product
}
const initialState: initialStateProps = {
  product: {
    fdcId: 0,
    description: "",
    publicationDate: "",
    foodNutrients: [],
    dataType: '',
    foodClass: '',
    inputFoods: [],
    foodComponents: [],
    foodAttributes: [],
    nutrientConversionFactors: [],
    ndbNumber: 0,
    isHistoricalReference: false,
    foodCategory: {
      id: 0,
      code: '',
      description: ""
    }
  }
}
export const ProductReduser = (state = initialState, action : ActionsType) : initialStateProps => {

  switch (action.type) {
    case SET_PRODUCT:
      const clone = cloneDeep(state);
      clone.product = action.product;
      return clone;

    default:
      return state
  }
}
