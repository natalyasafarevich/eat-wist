import {cloneDeep} from "lodash";
import {ActionsType, SET_PRODUCT} from "./action";
import {Product} from "../../moduls/Product";


type initialStateProps = {
  product: Product
}
const initialState: initialStateProps = {
  product: {
    dataType: "",
    description: "",
    fdcId: 0,
    foodNutrients: [],
    publicationDate: '',
    brandOwner: '',
    gtinUpc: '',
    ndbNumber: 0,
    foodCode: ''
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
